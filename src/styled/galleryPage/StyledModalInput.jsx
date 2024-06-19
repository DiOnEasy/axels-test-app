import styled from 'styled-components';

export const StyledInput = styled.input.attrs(({ placeholder }) => ({
    placeholder: placeholder
}))`
    background: transparent;
    border: 1px solid #e2e2e1;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 15px;
    cursor: pointer;
    &::placeholder {
        color: #e1e1e1;
    }
`;
