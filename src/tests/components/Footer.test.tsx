import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Footer } from 'components';

describe('Footer', () => {
    it('Footer snapshot', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });
});
