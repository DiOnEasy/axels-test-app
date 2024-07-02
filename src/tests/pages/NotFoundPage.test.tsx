import '@babel/preset-react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import store from 'store';
import { renderWithRouter } from 'tests/helpers/renderWithRouter';

describe('NotFoundPage', () => {
    it('should render home page link', () => {
        renderWithRouter({ route: '/not-found-page' }, store);
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
    });
    
    it('should match snapshot', () => {
        const { baseElement } = renderWithRouter(
            { route: '/not-found-page' },
            store
        );
        expect(baseElement).toMatchSnapshot();
    });
});
