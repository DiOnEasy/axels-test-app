import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { routes } from 'routes/routes';

export const renderWithRouter = ({ route = '/' } = {}, store) => {
    window.history.pushState({}, 'Test page', route);

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Routes>
            </MemoryRouter>
        </Provider>
    );
};
