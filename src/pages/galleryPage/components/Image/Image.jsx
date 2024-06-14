import { useEffect } from "react";
import { StyledImg } from "../../../../styled/components/StyledImg";

export const Image = ({ src }) => {
  useEffect(() => {
    console.log(src);
  });
  return <StyledImg src={src} />;
};
