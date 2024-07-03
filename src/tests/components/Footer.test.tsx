import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Footer } from 'components';

describe('Footer', () => {
    it('should match a snapshot', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });
});
