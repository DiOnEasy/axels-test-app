import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { CommentForm } from 'components';

import store from 'store';

describe('CommentForm', () => {
    it('CommentForm snapshot', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <CommentForm />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render the form correctly', () => {
        render(
            <Provider store={store}>
                <CommentForm />
            </Provider>
        );

        expect(screen.getByPlaceholderText('Ваше имя')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('Ваш комментарий')
        ).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
