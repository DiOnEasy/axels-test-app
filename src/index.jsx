import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'App';

import { Global } from 'styled/Global';
import store from 'store';
import 'mockServer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Global />
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </>
);
