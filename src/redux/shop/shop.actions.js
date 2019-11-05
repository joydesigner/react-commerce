import ShopActionTypes from './shop.types';

const updateCollections = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
});

export default updateCollections;