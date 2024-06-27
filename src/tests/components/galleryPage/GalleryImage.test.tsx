import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { GalleryImage } from 'components';

describe('GalleryImage', () => {
    it('GalleryImage snapshot', () => {
        const mockSrc = 'https://test.test';
        const { asFragment } = render(<GalleryImage src={mockSrc} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
