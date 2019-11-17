import React from 'react';

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


export default CollectionPage;