import { useEffect } from "react";
import { StyledGalleryImage } from "./StyledGalleryImage";

export const Image = ({ src }) => {
  useEffect(() => {
    console.log(src);
  });
  return <StyledGalleryImage src={src} />;
};
