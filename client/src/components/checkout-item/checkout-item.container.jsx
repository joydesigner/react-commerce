import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutItem from './checkout-item.component';
import { removeItemFromCart, clearItemFromCart } from '../../graphql/cart.utils';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
   
  }
`;
const GET_CART_ITEMS = gql`
 {
   cartItems @client
 }
`;

const CheckoutItemContainer = props => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {
      addItemToCart => (
        <CheckoutItem
          {...props}
          addItem={item => addItemToCart({ variables: { item } })}
        />
      )
    }
  </Mutation>
);

export default CheckoutItemContainer;