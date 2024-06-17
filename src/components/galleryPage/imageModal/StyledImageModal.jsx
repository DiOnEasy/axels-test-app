import styled from "styled-components";

export const StyledModalCloseButton = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;


export const StyledModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background: #ffffff;
  width: 60%;
  min-width: 650px;
  outline: none;
`;
