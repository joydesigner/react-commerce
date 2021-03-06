import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

// export const fetchCollectionsStartAsync = () => {

//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());

//     collectionRef.onSnapshot(snapshot => {
//       const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//       dispatch(fetchCollectionSuccess(collectionsMap));
//     }, onError => {
//       console.log('failure to get data', onError);
//       dispatch(fetchCollectionFailure(onError.message));
//     });

// }

