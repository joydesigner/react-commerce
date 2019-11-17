import React from 'react';
import { Route } from 'react-router-dom';

import { default as CollectionsOverview } from '../../components/collections-overview/collection-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

import { ShopPageContainer } from './shop.styles';

const ShopPage = ({ match }) => {
  return (<ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </ShopPageContainer>);
}

export default ShopPage;