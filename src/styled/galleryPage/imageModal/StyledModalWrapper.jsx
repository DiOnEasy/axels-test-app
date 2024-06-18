import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background: #ffffff;
  width: 60%;
  min-width: 599px;
  outline: none;
  @media (max-width: 599px) {
    padding: 0;
    min-width: auto;
    width: 100%;
    height: 100vh;
  }
`;
