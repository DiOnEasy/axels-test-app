import styled from 'styled-components';

export const StyledGalleryImage = styled.img<{ $pointer?: boolean }>`
  width: 100%;
  box-shadow: 2px 2px 8px black;
  object-fit: cover;
  max-height: 380px;
  height: 100%;
  &:hover{
    cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'auto')};
  }
`;
