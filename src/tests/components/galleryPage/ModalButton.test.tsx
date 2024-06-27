import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ModalButton } from 'components';

describe('ModalButton', () => {
    it('ModalButton snapshot', () => {
        const { asFragment } = render(<ModalButton />);
        expect(asFragment()).toMatchSnapshot();
    });
});
