import React from 'react';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';


import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CheckoutButton } from './cart-dropdown.styles';

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
            <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
          )}
    </CartItemsContainer>
    <CheckoutButton onClick={() => {
      history.push('/checkout');
      toggleCartHidden();
    }}>GO TO CHECKOUT</CheckoutButton>
  </CartDropdownContainer>
);


export default withRouter(CartDropDown);