import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ModalInput } from 'components';

describe('ModalInput', () => {
    it('ModalInput snapshot', () => {
        const mockProps = {
            name: 'testName',
            value: 'testValue',
            onChange: jest.fn(),
            onBlur: jest.fn(),
            placeholder: 'testPlaceholder',
            error: false,
            helperText: 'Test helper text'
        };

        const { asFragment } = render(<ModalInput {...mockProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
