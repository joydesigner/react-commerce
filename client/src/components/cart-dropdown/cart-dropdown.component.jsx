import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CheckoutButton } from './cart-dropdown.styles';

const CartDropDown = ({ cartItems, currentUser, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        currentUser &&
          cartItems.length ? (
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          ) : (
            <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
          )}
    </CartItemsContainer>
    <CheckoutButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>GO TO CHECKOUT</CheckoutButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(CartDropDown));