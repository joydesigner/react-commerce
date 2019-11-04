import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionPageContainer, TitleContainer, ItemsContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        }
      </ItemsContainer>
    </CollectionPageContainer>
  )
};
// for mapStateToProps, first param is state, second is ownProps
const mapStateToProps = (state, ownProps) => createStructuredSelector({
  collection: selectShopCollection(ownProps.match.params.collectionId)
});

export default connect(mapStateToProps)(CollectionPage);