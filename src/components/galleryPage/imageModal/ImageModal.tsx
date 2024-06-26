import React, { FC, MouseEventHandler, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Box, CircularProgress, Grid, Modal, Typography } from '@mui/material';
import { CommentForm, GalleryImage } from 'components';
import { StyledModalCloseButton } from 'styled/galleryPage/imageModal/StyledModalCloseButton';
import { StyledModalWrapper } from 'styled/galleryPage/imageModal/StyledModalWrapper';
import { variables } from 'styled/variables';

import { RootState } from 'store';
import { fetchImageDetails } from 'store/ducks/images';
import { convertDate } from 'utils/converDate';

interface IImageModalProps {
    open: boolean;
    onCloseImageModal: MouseEventHandler;
}

export const ImageModal: FC<IImageModalProps> = ({
    open,
    onCloseImageModal
}) => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    const image = useSelector((state: RootState) => state.images.imageDetails);
    const imageLoading = useSelector(
        (state: RootState) => state.images.imageDetailsLoading
    );

    useEffect(() => {
        dispatch(fetchImageDetails(id as string));
    }, [dispatch, id]);

    return (
        <>
            <Modal open={open}>
                <StyledModalWrapper>
                    {imageLoading ? (
                        <Box sx={{ display: 'grid', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <>
                            <StyledModalCloseButton
                                onClick={onCloseImageModal}
                            />
                            <Grid container columns={{ xs: 1, sm: 12 }}>
                                <Grid
                                    paddingX={{ sm: 2, xs: 0 }}
                                    item
                                    xs={1}
                                    sm={7}
                                >
                                    {image.url && (
                                        <GalleryImage src={image.url} />
                                    )}
                                </Grid>
                                <Grid
                                    paddingTop={{ xs: 3, sm: 2 }}
                                    paddingBottom={{ xs: 4, sm: 0 }}
                                    paddingX={{ xs: 2, sm: 0 }}
                                    item
                                    xs={1}
                                    sm={5}
                                >
                                    {image.comments.map((comment, index) => (
                                        <Box key={index}>
                                            <Typography
                                                color={
                                                    variables.color.secondary
                                                }
                                                fontSize={variables.fontSize.md}
                                            >
                                                {convertDate(comment.date)}
                                            </Typography>
                                            <Typography
                                                color={variables.color.primary}
                                                fontSize={variables.fontSize.md}
                                            >
                                                {comment.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Grid>
                                <CommentForm />
                            </Grid>
                        </>
                    )}
                </StyledModalWrapper>
            </Modal>
        </>
    );
};
