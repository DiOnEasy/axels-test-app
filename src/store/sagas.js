import { all } from '@redux-saga/core/effects';

import {
    watcherFetchImageDetails,
    watcherFetchImages,
    watcherSendComment
} from './ducks/images';

export default function* rootSaga() {
    yield all([
        watcherFetchImages(),
        watcherFetchImageDetails(),
        watcherSendComment()
    ]);
}
