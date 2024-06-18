import styled from 'styled-components';

export const StyledGalleryImage = styled.img.attrs((props) => ({
    src: props.src || null
}))`
    width: 100%;
    cursor: pointer;
`;
