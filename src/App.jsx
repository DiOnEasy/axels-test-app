import { Route, Routes } from 'react-router-dom';

import { Footer, Header } from './components';
import { AppWrapper } from './styled/AppWrapper';

import { routes } from './routes/routes';

function App() {
    return (
        <AppWrapper>
            <Header />
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Routes>
            <Footer />
        </AppWrapper>
    );
}

export default App;
