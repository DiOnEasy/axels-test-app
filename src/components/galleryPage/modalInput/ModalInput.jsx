import { StyledInput } from '../../../styled/galleryPage/StyledModalInput';

export const ModalInput = ({ placeholder, value, onInputChange }) => (
    <StyledInput
        value={value}
        onChange={(e) => onInputChange(e)}
        placeholder={placeholder}
    />
);
