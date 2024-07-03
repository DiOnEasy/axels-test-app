import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Header } from 'components';

describe('Header', () => {
    it('should match a snapshot', () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});
