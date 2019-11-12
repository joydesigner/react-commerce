import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shop.styles';


const ShopPage = ({ match, fetchCollectionsStart }) => {
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();
  // }
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);


  return (<ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
    <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
  </ShopPageContainer>);
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(null, mapDispatchToProps)(ShopPage);