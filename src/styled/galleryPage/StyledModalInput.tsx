import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledInput = styled(TextField)`
    &.MuiFormControl-root {
        min-width: 100%;
        margin-bottom: 15px;
    }
    & .MuiInputBase-root {
        width: 100%;
    }
    & .MuiInputBase-input,
    & .MuiOutlinedInput-notchedOutline {
        background: transparent;
        border: 1px solid #e2e2e1;
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        &:hover {
            cursor: pointer;
        }
        &::placeholder {
            color: #e2e2e1;
        }
    }
`;
