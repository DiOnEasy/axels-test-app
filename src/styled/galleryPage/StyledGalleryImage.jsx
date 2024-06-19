import styled from 'styled-components';

export const StyledGalleryImage = styled.img.attrs(({ src }) => ({
    src: src || null
}))`
    width: 100%;
    box-shadow: 2px 2px 8px black;
    cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'auto')};
`;
