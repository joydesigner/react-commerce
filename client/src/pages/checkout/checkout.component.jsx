import React from 'react';
import { connect } from 'react-redux';

import { default as CheckoutItem } from '../../components/checkout-item/checkout-item.container';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CheckoutContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, TextWarningContainer } from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {
      cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
    }
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <TextWarningContainer>* Please using the following test credit card: <br /> 4242424242424242 - Exp: 01/20 -CVV: 123</TextWarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutContainer>
);

export default CheckoutPage;