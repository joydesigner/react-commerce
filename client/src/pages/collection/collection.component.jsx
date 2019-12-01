import React from 'react';

import { default as CollectionItem } from '../../components/collection-item/collection-item.container';

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