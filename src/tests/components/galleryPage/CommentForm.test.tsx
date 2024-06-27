import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { CommentForm } from 'components';
import { GalleryPage } from 'pages/galleryPage/GalleryPage';

import store from 'store';
import { renderWithRouter } from 'tests/helpers/renderWithRouter';

describe('CommentForm', () => {
    it('CommentForm snapshot', () => {
        const { asFragment } = renderWithRouter(<CommentForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render the form correctly', () => {
        renderWithRouter(<CommentForm />);

        expect(screen.getByPlaceholderText('Ваше имя')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('Ваш комментарий')
        ).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
