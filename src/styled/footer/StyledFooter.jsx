import styled from 'styled-components';

import { variables } from 'styled/variables';

export const StyledFooter = styled.div`
    border-top: 1px solid ${variables.color.secondary};
    color: ${variables.color.secondary};
    padding: 15px 0;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 25px;
    width: calc(100% - 50px);
    background: ${variables.color.white};
`;
