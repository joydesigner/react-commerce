import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { calculateTotalPrice } from '../../graphql/cart.utils';

import CheckoutPage from './checkout.component';

const GET_CART_ITEMS = gql`
 {
   cartItems @client
 }
`;

const CheckoutContainer = (props) => (
  <Query query={GET_CART_ITEMS}>
    {
      ({ data: { cartItems } }) => {
        const totalPrice = calculateTotalPrice(cartItems);
        return (
          <CheckoutPage
            cartItems={cartItems} total={totalPrice} {...props} />
        )
      }
    }
  </Query>
);

export default CheckoutContainer;
