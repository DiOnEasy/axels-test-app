import { runSaga } from '@redux-saga/core';

import * as api from 'api';
import imageReducer, {
    fetchImageDetails,
    sendComment,
    setLoading,
    fetchImagesSuccess,
    fetchImageDetailsSuccess,
    sendCommentSuccess,
    workerFetchImages,
    workerFetchImageDetails,
    workerSendComment,
    IInitialState,
    IImage,
    IImageDetails,
    ICommentInfo
} from 'store/ducks/images';

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

describe('imageSlice', () => {
    it('should handle initial state', () => {
        expect(imageReducer(undefined, { type: 'unknown' })).toEqual(
            initialState
        );
    });

    it('should handle setLoading', () => {
        const actual = imageReducer(
            initialState,
            setLoading({ type: 'loading', value: true })
        );
        expect(actual.loading).toEqual(true);
    });

    it('should handle fetchImagesSuccess', () => {
        const images: IImage[] = [
            { id: '1', url: 'url1' },
            { id: '2', url: 'url2' }
        ];
        const actual = imageReducer(initialState, fetchImagesSuccess(images));
        expect(actual.images).toEqual(images);
    });

    it('should handle fetchImageDetailsSuccess', () => {
        const imageDetails: IImageDetails = {
            id: '1',
            url: 'url1',
            comments: []
        };
        const actual = imageReducer(
            initialState,
            fetchImageDetailsSuccess(imageDetails)
        );
        expect(actual.imageDetails).toEqual(imageDetails);
    });

    it('should handle sendCommentSuccess', () => {
        const commentInfo: ICommentInfo = { text: 'Nice', name: 'John' };
        const actual = imageReducer(
            initialState,
            sendCommentSuccess(commentInfo)
        );
        expect(actual.imageDetails.comments.length).toEqual(1);
        expect(actual.imageDetails.comments[0].text).toEqual('Nice');
        expect(actual.imageDetails.comments[0].name).toEqual('John');
        expect(actual.imageDetails.comments[0].date).toEqual(
            Math.floor(Date.now() / 1000)
        );
    });
});

describe('sagas', () => {
    it('workerFetchImages should fetch images and dispatch success action', async () => {
        const dispatched: any[] = [];

        const fakeStore = {
            getState: () => ({}),
            dispatch: (action: any) => dispatched.push(action)
        };

        const mockImages = [
            { id: '1', url: 'url1' },
            { id: '2', url: 'url2' }
        ];
        const fetchImagesApi = jest
            .spyOn(api, 'fetchImagesApi')
            .mockImplementation(() => Promise.resolve({ data: mockImages }));

        await runSaga(fakeStore, workerFetchImages).toPromise();

        expect(fetchImagesApi).toHaveBeenCalledTimes(1);

        expect(dispatched).toEqual([
            setLoading({ type: 'loading', value: true }),
            fetchImagesSuccess(mockImages),
            setLoading({ type: 'loading', value: false })
        ]);
    });

    it('workerFetchImageDetails should fetch image details and dispatch success action', async () => {
        const dispatched: any[] = [];

        const fakeStore = {
            getState: () => ({}),
            dispatch: (action: any) => dispatched.push(action)
        };

        const mockImageDetails = { id: '1', url: 'url1', comments: [] };

        const requestImageDetailsApi = jest
            .spyOn(api, 'fetchImageDetailsApi')
            .mockImplementation(() =>
                Promise.resolve({ data: mockImageDetails })
            );

        await runSaga(
            fakeStore,
            workerFetchImageDetails,
            fetchImageDetails('1')
        ).toPromise();

        expect(requestImageDetailsApi).toHaveBeenCalledTimes(1);

        expect(dispatched).toEqual([
            setLoading({ type: 'imageDetailsLoading', value: true }),
            fetchImageDetailsSuccess(mockImageDetails),
            setLoading({ type: 'imageDetailsLoading', value: false })
        ]);
    });

    it('workerSendComment should send comment and dispatch success action', async () => {
        const dispatched: any[] = [];

        const fakeStore = {
            getState: () => ({}),
            dispatch: (action: any) => dispatched.push(action)
        };

        const mockCommentInfo = { text: 'Nice', name: 'John' };
        const mockId = '1';

        const sendCommentApi = jest
            .spyOn(api, 'sendCommentApi')
            .mockImplementation(() => Promise.resolve({ _bodyInit: 204 }));

        await runSaga(
            fakeStore,
            workerSendComment,
            sendComment({ commentInfo: mockCommentInfo, id: mockId })
        ).toPromise();

        expect(sendCommentApi).toHaveBeenCalledTimes(1);

        expect(dispatched).toEqual([
            setLoading({ type: 'commentLoading', value: true }),
            sendCommentSuccess(mockCommentInfo),
            setLoading({ type: 'commentLoading', value: false })
        ]);
    });
});
