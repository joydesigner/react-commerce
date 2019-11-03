import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
};
// for mapStateToProps, first param is state, second is ownProps
const mapStateToProps = (state, ownProps) => createStructuredSelector({
  collection: selectShopCollection(ownProps.match.params.collectionId)
});

export default connect(mapStateToProps)(CollectionPage);