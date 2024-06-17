import { StyledGalleryImage } from "./StyledGalleryImage";

export const Image = ({ src, onOpenImageModal }) => {
  return <StyledGalleryImage onClick={onOpenImageModal} src={src} />;
};
