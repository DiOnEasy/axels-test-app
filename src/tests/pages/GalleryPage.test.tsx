import '@babel/preset-react';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';

import configureStore from 'redux-mock-store';
import { renderWithRouter } from 'tests/helpers/renderWithRouter';

const mockStore = configureStore([]);

describe('GalleryPage', () => {
    let store: any;
    const initialState = {
        images: {
            images: [
                { id: '1', url: 'image1.jpg' },
                { id: '2', url: 'image2.jpg' }
            ],
            loading: true
        }
    };

    beforeEach(() => {
        store = mockStore(initialState);
    });

    const getStateWithLoading = (loading: boolean) => ({
        ...initialState,
        images: {
            ...initialState.images,
            loading
        }
    });

    it('should render loading state initially', () => {
        renderWithRouter({ route: '/gallery' }, store);

        expect(screen.getByText('loading')).toBeInTheDocument();
    });

    it('should render images after loading', async () => {
        store = mockStore(getStateWithLoading(false));

        renderWithRouter({ route: '/gallery' }, store);

        await waitFor(() => {
            expect(screen.getAllByRole('img')).toHaveLength(2);
        });
    });

    it('should match a snapshot', () => {
        store = mockStore(getStateWithLoading(false));

        const { baseElement } = renderWithRouter(
            {
                route: '/gallery'
            },
            store
        );

        expect(baseElement).toMatchSnapshot();
    });
});
