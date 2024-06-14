import styled from "styled-components";

export const StyledImg = styled.img.attrs((props) =>({
  src:  props.src || null,
}))`
  width: 100%;
`;
