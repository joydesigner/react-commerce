import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import updateCollections from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shop.styles';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      console.log(snapshot);
      const collectionsMap = await convertCollectionSnapshotToMap(snapshot);
      console.log(collectionsMap);
      await updateCollections(collectionsMap);
      this.setState({ loading: false });
      // <WithSpinner WrappedComponent={}
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (<ShopPageContainer>
      <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
    </ShopPageContainer>);
  }
}
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);