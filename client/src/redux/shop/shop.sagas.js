import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = yield firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}