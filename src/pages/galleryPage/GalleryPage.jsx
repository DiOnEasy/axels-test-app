import { useState } from 'react';
import { Grid } from '@mui/material';

import { GalleryImage, ImageModal } from '../../components';

export const GalleryPage = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const handleOpenImageModal = () => setModalOpen(true);
    const handleCloseImageModal = () => setModalOpen(false);

    const images = [
        {
            url: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
        },
        {
            url: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
        },
        {
            url: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
        },
        {
            url: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
        },
        {
            url: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
        },
        {
            url: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
        }
    ];

    return (
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
    );
};
