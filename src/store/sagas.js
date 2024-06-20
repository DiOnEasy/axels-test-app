import { all } from '@redux-saga/core/effects';
import { watcherGetImages } from './ducks/images';

export default function* rootSaga() {
    yield all([watcherGetImages()]);
}
