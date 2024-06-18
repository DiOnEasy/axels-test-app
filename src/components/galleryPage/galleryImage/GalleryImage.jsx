import { StyledGalleryImage } from "../../../styled/galleryPage/galleryImage/StyledGalleryImage";

export const Image = ({ src, onOpenImageModal }) => (
  <StyledGalleryImage onClick={onOpenImageModal} src={src} />
);
