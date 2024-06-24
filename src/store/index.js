import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import imageReducer from 'store/ducks/images';
import sagas from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    devTools: true,
    reducer: {
        images: imageReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);

export default store;
