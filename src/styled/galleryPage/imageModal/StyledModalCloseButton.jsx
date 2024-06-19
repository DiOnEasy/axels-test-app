import styled from 'styled-components';

import { variables } from '../../variables';

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
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: ${variables.color.primary};
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;
