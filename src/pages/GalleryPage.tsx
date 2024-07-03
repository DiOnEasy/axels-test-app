import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Grid } from '@mui/material';
import { GalleryImage, ImageModal } from 'components';

import { RootState } from 'store';
import { fetchImages } from 'store/ducks/images';

export const GalleryPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const [modalOpen, setModalOpen] = useState(!!id);

    const images = useSelector((state: RootState) => state.images.images);
    const loading = useSelector((state: RootState) => state.images.loading);

    const handleCloseImageModal = () => {
        navigate('/gallery');
    };

    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);

    useEffect(() => {
        setModalOpen(!!id);
    }, [id]);

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
                            images.map(
                                (img, index) =>
                                    img.url && (
                                        <Grid key={index} item xs={4}>
                                            <Link to={`/gallery/${img.id}`}>
                                                <GalleryImage
                                                    $pointer
                                                    src={img.url}
                                                />
                                            </Link>
                                        </Grid>
                                    )
                            )}
                    </Grid>
                    {modalOpen && id && (
                        <ImageModal
                            open={modalOpen}
                            onCloseImageModal={handleCloseImageModal}
                        />
                    )}
                </>
            )}
        </>
    );
};
