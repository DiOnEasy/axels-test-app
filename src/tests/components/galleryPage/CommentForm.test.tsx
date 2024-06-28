import '@babel/preset-react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';

import { GalleryPage } from 'pages/GalleryPage';

import { renderWithRouter } from 'tests/helpers/renderWithRouter';

describe('CommentForm', () => {
    it('CommentForm snapshot', () => {
        const { asFragment } = renderWithRouter({ route: '/gallery/1' });

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render the form correctly', () => {
        renderWithRouter({ route: '/gallery/1' });

        expect(screen.getByPlaceholderText('Ваше имя')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('Ваш комментарий')
        ).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
