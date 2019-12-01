import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { calculateItemsCount } from '../../graphql/cart.utils';

import CartIcon from './cart-icon.component';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;
const GET_CART_ITEMS = gql`
 {
   cartItems @client
 }
`;

const GET_ITEM_COUNT = gql`
 {
   itemCount @client
 }
`;

const CartIconContainer = (props) => (

  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {
      toggleCartHidden => (
        <Query query={GET_CART_ITEMS}>
          {
            ({ data: { cartItems } }) => {
              const itemCount = calculateItemsCount(cartItems);
              return (
                <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
              );
            }
          }
        </Query>
      )
    }
  </Mutation>
);

export default CartIconContainer;