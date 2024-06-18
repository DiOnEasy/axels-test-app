import { StyledGalleryImage } from "../../../styled/galleryPage/galleryImage/StyledGalleryImage";

export const GalleryImage = ({ src, onOpenImageModal }) => (
  <StyledGalleryImage onClick={onOpenImageModal} src={src} />
);
