import { call, put, takeEvery } from '@redux-saga/core/effects';
import { createAction, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';

const initialState = {
    loading: false,
    images: [],
    imageDetails: {
        id: null,
        src: null,
        comments: []
    }
};

export const imageSlice = createSlice({
    name: 'galleryImages',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        getImagesSuccess: (state, action) => {
            state.images = action.payload;
        }
    }
});

export const getImages = createAction('images/fetchImages');

export function* watcherGetImages() {
    yield takeEvery(getImages, workerGetImages);
}

export function* workerGetImages() {
    try {
        yield put(setLoading(true));
        const {data} = yield call(axios.get, '/api/images');
        yield put(getImagesSuccess(data.data));
    } catch (err) {
        console.warn(err);
    } finally {
        yield put(setLoading(false));
    }
}

export const { setLoading, getImagesSuccess } = imageSlice.actions;

export const imageReducer = imageSlice.reducer;
