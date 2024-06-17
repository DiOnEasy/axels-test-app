import { StyledFooter } from "./StyledFooter";

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return <StyledFooter>&copy; 2018-{currentYear}</StyledFooter>;
};
