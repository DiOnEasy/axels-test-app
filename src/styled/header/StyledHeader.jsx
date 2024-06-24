import styled from 'styled-components';

import { variables } from 'styled/variables';

export const StyledHeader = styled.h1`
    text-transform: uppercase;
    font-size: ${variables.fontSize.xl};
    text-align: center;
    margin-bottom: 25px;
    color: ${variables.color.primary};
`;
