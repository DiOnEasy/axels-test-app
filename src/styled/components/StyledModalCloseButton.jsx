import styled from "styled-components";

export const StyledModalCloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 2px;
    background-color: black;
  }
`;
