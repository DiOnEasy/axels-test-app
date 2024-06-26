import styled from 'styled-components';
import { variables } from 'styled/variables';

export const StyledModalButton = styled.button`
    background-color: ${variables.color.actionBg};
    color: ${variables.color.white};
    border-radius: 5px;
    text-align: center;
    width: 100%;
    padding: 10px;
    border: none;
    cursor: pointer;
`;
