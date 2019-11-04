import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

import { ShopPageContainer } from './shop.styles';

const ShopPage = ({ match }) => {
  return (<ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </ShopPageContainer>);
};

export default ShopPage;