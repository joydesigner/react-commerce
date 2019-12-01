import React from 'react';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
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

export default CartIcon;