import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { GalleryImage, ImageModal } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/ducks/images';

export const GalleryPage = () => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenImageModal = () => setModalOpen(true);
    const handleCloseImageModal = () => setModalOpen(false);

    const images = useSelector((state) => state.images.images);
    const loading = useSelector((state) => state.images.loading);

    useEffect(() => {
        dispatch(getImages());
        console.log(images)
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <>loading</>
            ) : (
                <>
                    <Grid
                        container
                        rowSpacing={3}
                        columnSpacing={2}
                        columns={{ xs: 4, sm: 8, lg: 12 }}
                    >
                        {images &&
                            images.map((img, index) => (
                                <Grid key={index} item xs={4}>
                                    <GalleryImage
                                        $pointer
                                        onOpenImageModal={handleOpenImageModal}
                                        src={img.url}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                    <ImageModal
                        open={modalOpen}
                        onCloseImageModal={handleCloseImageModal}
                    />
                </>
            )}
        </>
    );
};
