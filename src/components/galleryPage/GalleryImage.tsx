import React, { FC } from 'react';

import { StyledGalleryImage } from 'styled/galleryPage/StyledGalleryImage';

interface IGalleryImageProps {
    src: string;
    $pointer?: boolean
}

export const GalleryImage: FC<IGalleryImageProps> = ({ src, $pointer }) => (
    <StyledGalleryImage src={src} $pointer={$pointer} />
);
