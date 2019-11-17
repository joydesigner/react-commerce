import React from 'react';
import { connect } from 'react-redux';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const CartIcon = ({ toggleCartHidden, itemCount, currentUser }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    < ItemCountContainer >
      {itemCount}
    </ItemCountContainer>
  </CartIconContainer >
);


// *Redux selector note
//1. the augument is redux state 
//2. the return data, which is itemCount, is derived from the state (which is not originally belonged to the state) 
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(CartIcon);