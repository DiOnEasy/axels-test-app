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

        expect(actual.imageDetails.comments[0]).toEqual({
            text: 'Nice',
            name: 'John',
            date: Math.floor(Date.now() / 1000)
        });
    });
});

describe('images sagas', () => {
    let dispatched: any[];
    let fakeStore: any;

    beforeEach(() => {
        dispatched = [];
        fakeStore = {
            getState: () => ({}),
            dispatch: (action: any) => dispatched.push(action)
        };
    });

    it('should call fetchImagesApi only one time in workerFetchImages', async () => {
        const mockImages = [{}];

        const fetchImagesApi = jest
            .spyOn(api, 'fetchImagesApi')
            .mockImplementation(() => Promise.resolve({ data: mockImages }));

        await runSaga(fakeStore, workerFetchImages).toPromise();

        expect(fetchImagesApi).toHaveBeenCalledTimes(1);
    });

    it('should dispatch fetchImagesSuccess action in workerFetchImages', async () => {
        const mockImages = [
            { id: '1', url: 'url1' },
            { id: '2', url: 'url2' }
        ];

        jest.spyOn(api, 'fetchImagesApi').mockImplementation(() =>
            Promise.resolve({ data: mockImages })
        );

        await runSaga(fakeStore, workerFetchImages).toPromise();

        expect(dispatched).toEqual([
            setLoading({ type: 'loading', value: true }),
            fetchImagesSuccess(mockImages),
            setLoading({ type: 'loading', value: false })
        ]);
    });

    it('should call fetchImageDetailsApi only one time in workerFetchImageDetails', async () => {
        const mockImageDetails = {};

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
    });

    it('should dispatch fetchImageDetailsSuccess action in workerFetchImageDetails', async () => {
        const mockImageDetails = { id: '1', url: 'url1', comments: [] };

        jest.spyOn(api, 'fetchImageDetailsApi').mockImplementation(() =>
            Promise.resolve({ data: mockImageDetails })
        );

        await runSaga(
            fakeStore,
            workerFetchImageDetails,
            fetchImageDetails('1')
        ).toPromise();

        expect(dispatched).toEqual([
            setLoading({ type: 'imageDetailsLoading', value: true }),
            fetchImageDetailsSuccess(mockImageDetails),
            setLoading({ type: 'imageDetailsLoading', value: false })
        ]);
    });

    it('should call sendCommentApi only one time in workerSendComment', async () => {
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

    it('should dispatch sendCommentSuccess action in workerSendComment', async () => {
        const mockCommentInfo = { text: 'Nice', name: 'John' };
        const mockId = '1';

        jest.spyOn(api, 'sendCommentApi').mockImplementation(() =>
            Promise.resolve({ _bodyInit: 204 })
        );

        await runSaga(
            fakeStore,
            workerSendComment,
            sendComment({ commentInfo: mockCommentInfo, id: mockId })
        ).toPromise();

        expect(dispatched).toEqual([
            setLoading({ type: 'commentLoading', value: true }),
            sendCommentSuccess(mockCommentInfo),
            setLoading({ type: 'commentLoading', value: false })
        ]);
    });
});
