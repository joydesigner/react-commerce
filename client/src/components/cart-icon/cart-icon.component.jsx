import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
// *Redux selector note
//1. the augument is redux state 
//2. the return data, which is itemCount, is derived from the state (which is not originally belonged to the state) 
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);