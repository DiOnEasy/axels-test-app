import React, { FC } from 'react';

import { StyledModalButton } from 'styled/galleryPage/StyledModalButton';

interface IModalButtonProps {
    type?: 'submit' | 'reset' | 'button' | undefined;
}

export const ModalButton: FC<IModalButtonProps> = ({ type }) => (
    <StyledModalButton type={type}>Оставить комментарий</StyledModalButton>
);
