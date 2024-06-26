import React, { FC } from 'react';

import { StyledFooter } from 'styled/footer/StyledFooter';

export const Footer: FC = () => {
    const currentYear = new Date().getFullYear();
    return <StyledFooter>&copy; 2018-{currentYear}</StyledFooter>;
};
