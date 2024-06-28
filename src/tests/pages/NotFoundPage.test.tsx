import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { NotFoundPage } from 'pages/NotFoundPage';

describe('NotFoundPage', () => {
    it('NotFoundPage snapshot', () => {
        const { asFragment } = render(<NotFoundPage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
