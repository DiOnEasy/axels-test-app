import { StyledGalleryImage } from 'styled/galleryPage/StyledGalleryImage';

export const GalleryImage = ({ src, onOpenImageModal, $pointer }) => (
    <StyledGalleryImage
        src={src}
        $pointer={$pointer}
    />
);
