import { call, put, takeEvery } from '@redux-saga/core/effects';
import { createAction, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';

const initialState = {
    loading: false,
    imageDetailsLoading: false,
    commentLoading: false,
    images: [],
    imageDetails: {
        id: null,
        url: null,
        comments: []
    }
};

export const imageSlice = createSlice({
    name: 'galleryImages',
    initialState,
    reducers: {
        setLoading(state, action) {
            const { type, value } = action.payload;
            state[type] = value;
        },
        fetchImagesSuccess: (state, action) => {
            state.images = action.payload;
        },
        fetchImageDetailsSuccess: (state, action) => {
            state.imageDetails = action.payload;
        },
        sendCommentSuccess: (state, action) => {
            return {
                ...state,
                imageDetails: {
                    ...state.imageDetails,
                    comments: [
                        ...state.imageDetails.comments,
                        {
                            text: action.payload.text,
                            userId: action.payload.name,
                            date: Math.floor(Date.now() / 1000)
                        }
                    ]
                }
            };
        }
    }
});

export const fetchImages = createAction('test-task/images/FETCH_IMAGES');
export const fetchImageDetails = createAction('test-task/images/FETCH_IMAGE_DETAILS');
export const sendComment = createAction('test-task/images/SEND_COMMENT');

export function* watcherFetchImages() {
    yield takeEvery(fetchImages, workerFetchImages);
}
export function* watcherFetchImageDetails() {
    yield takeEvery(fetchImageDetails, workerFetchImageDetails);
}
export function* watcherSendComment() {
    yield takeEvery(sendComment, workerSendComment);
}

export function* workerFetchImages(state) {
    try {
        yield put(setLoading({ type: 'loading', value: true }));
        const {
            data: { data }
        } = yield call(axios.get, '/api/images');
        yield put(fetchImagesSuccess(data));
    } catch (err) {
        console.warn(err);
    } finally {
        yield put(setLoading({ type: 'loading', value: false }));
    }
}

export function* workerFetchImageDetails(action) {
    try {
        yield put(setLoading({ type: 'imageDetailsLoading', value: true }));
        const {
            data: { data }
        } = yield call(axios.get, `/api/images/${action.payload}`);
        if (data) {
            yield put(fetchImageDetailsSuccess(data));
        } else {
        }
    } catch (err) {
        console.warn(err);
    } finally {
        yield put(setLoading({ type: 'imageDetailsLoading', value: false }));
    }
}

export function* workerSendComment(action) {
    try {
        yield put(setLoading({ type: 'commentLoading', value: true }));
        const { data } = yield call(
            axios.post,
            `/api/images/1/comments`,
            action.payload
        );
        console.log(data);
        if (data._bodyInit === 204) {
            yield put(sendCommentSuccess(action.payload));
        } else {
            alert('Something went wrong');
        }
    } catch (err) {
        console.warn(err);
    } finally {
        yield put(setLoading({ type: 'commentLoading', value: false }));
    }
}

export const {
    setLoading,
    fetchImagesSuccess,
    fetchImageDetailsSuccess,
    sendImageSuccess,
    sendCommentSuccess
} = imageSlice.actions;

export default imageSlice.reducer;
