import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { routes } from 'routes/routes';
import store from 'store';

export const renderWithRouter = (component, initialRoute = '/') => {
    return render(
        <Provider store={store}>
            <MemoryRouter>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Routes>
                {component}
            </MemoryRouter>
        </Provider>
    );
};
