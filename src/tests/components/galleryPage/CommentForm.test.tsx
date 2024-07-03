import '@babel/preset-react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { CommentForm } from 'components';

import store from 'store';

describe('CommentForm', () => {
    const renderComponent = () => {
        return render(
            <Provider store={store}>
                <CommentForm />
            </Provider>
        );
    };

    it('should render name input correctly', () => {
        renderComponent();
        expect(screen.getByPlaceholderText('Ваше имя')).toBeInTheDocument();
    });

    it('should render comment input correctly', () => {
        renderComponent();
        expect(
            screen.getByPlaceholderText('Ваш комментарий')
        ).toBeInTheDocument();
    });

    it('should render submit button correctly', () => {
        renderComponent();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should match a snapshot', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });
});
