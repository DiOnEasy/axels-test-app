import React, { FC } from 'react';

import { StyledInput } from 'styled/galleryPage/StyledModalInput';

interface IModalInputProps {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    placeholder: string;
}
export const ModalInput: FC<IModalInputProps> = (props) => (
    <StyledInput {...props} />
);
