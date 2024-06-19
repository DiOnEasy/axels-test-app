import styled from 'styled-components';

export const StyledGalleryImage = styled.img.attrs(({ src }) => ({
    src: src || null
}))`
    width: 100%;
    cursor: ${({ $pointer }) => ($pointer ? 'pointer' : 'auto')};
`;
