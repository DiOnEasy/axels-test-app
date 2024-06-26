import { call, put, takeEvery } from '@redux-saga/core/effects';
import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

import axios from 'api/axios';

export interface ICommentInfo {
    text: string;
    name: string;
}
export interface IComment extends ICommentInfo {
    date: number;
}

export interface IImage {
    id: string | null;
    url: string | null;
}

export interface IImageDetails extends IImage {
    comments: IComment[];
}

export interface IInitialState {
    loading: boolean;
    imageDetailsLoading: boolean;
    commentLoading: boolean;
    images: IImage[];
    imageDetails: IImageDetails;
}

const initialState: IInitialState = {
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
        setLoading(
            state,
            action: PayloadAction<{
                type: keyof Pick<
                    IInitialState,
                    'loading' | 'imageDetailsLoading' | 'commentLoading'
                >,
                value: boolean
            }>
        ) {
            const { type, value } = action.payload;
            state[type] = value;
        },
        fetchImagesSuccess: (state, action: PayloadAction<IImage[]>) => {
            state.images = action.payload;
        },
        fetchImageDetailsSuccess: (
            state,
            action: PayloadAction<IImageDetails>
        ) => {
            state.imageDetails = action.payload;
        },
        sendCommentSuccess: (state, action: PayloadAction<ICommentInfo>) => {
            state.imageDetails.comments.push({
                text: action.payload.text,
                name: action.payload.name,
                date: Math.floor(Date.now() / 1000)
            });
        }
    }
});

export const fetchImages = createAction('test-task/images/FETCH_IMAGES');
export const fetchImageDetails = createAction<string>(
    'test-task/images/FETCH_IMAGE_DETAILS'
);
export const sendComment = createAction<{
    commentInfo: ICommentInfo,
    id: string
}>('test-task/images/SEND_COMMENT');

export function* watcherFetchImages() {
    yield takeEvery(fetchImages, workerFetchImages);
}
export function* watcherFetchImageDetails() {
    yield takeEvery(fetchImageDetails.type, workerFetchImageDetails);
}
export function* watcherSendComment() {
    yield takeEvery(sendComment.type, workerSendComment);
}

export function* workerFetchImages() {
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

export function* workerFetchImageDetails(
    action: PayloadAction<{ id: string }>
) {
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

export function* workerSendComment(
    action: PayloadAction<{ commentInfo: ICommentInfo, id: { id: string } }>
) {
    try {
        const {
            commentInfo,
            id: { id }
        } = action.payload;
        yield put(setLoading({ type: 'commentLoading', value: true }));
        const { data } = yield call(
            axios.post,
            `/api/images/${id}/comments`,
            commentInfo
        );
        if (data._bodyInit === 204) {
            yield put(sendCommentSuccess(commentInfo));
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

    sendCommentSuccess
} = imageSlice.actions;

export default imageSlice.reducer;
