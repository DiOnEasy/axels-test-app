import { StyledGalleryImage } from "./StyledGalleryImage";

export const Image = ({ src, onOpenImageModal }) => (
  <StyledGalleryImage onClick={onOpenImageModal} src={src} />
);
