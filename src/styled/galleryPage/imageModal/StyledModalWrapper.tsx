import styled from 'styled-components';
import { variables } from 'styled/variables';

export const StyledModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    background: ${variables.color.white};
    width: 60%;
    min-width: 599px;
    outline: none;
    @media (${variables.media.sm}) {
        padding: 0;
        min-width: auto;
        width: 100%;
        height: 100vh;
    }
`;
