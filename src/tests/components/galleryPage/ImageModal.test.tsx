import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { ImageModal } from 'components';

import configureStore from 'redux-mock-store';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: '1' })
}));

const mockStore = configureStore([]);

const store = mockStore({
    images: {
        imageDetails: {
            id: '1',
            url: 'https://example.com/image.jpg',
            comments: [
                { name: 'claus', date: 3123782132, text: 'Nice picture!' }
            ]
        },
        imageDetailsLoading: false
    }
});

describe('ImageModal Component', () => {
    it('should render img and comments', () => {
        render(
            <Provider store={store}>
                <ImageModal open={true} onCloseImageModal={() => {}} />
            </Provider>
        );

        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByText('26.12.2068')).toBeInTheDocument();
        expect(screen.getByText('Nice picture!')).toBeInTheDocument();
        expect(screen.getAllByRole('paragraph')).toHaveLength(2);
    });

    it('should match the snapshot when open is true', () => {
        const { baseElement } = render(
            <Provider store={store}>
                <ImageModal open={true} onCloseImageModal={() => {}} />
            </Provider>
        );

        expect(baseElement).toMatchSnapshot();
    });
});
