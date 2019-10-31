import { createSelector } from 'reselect';
//input selector (only select slice of state)
const selectCart = state => state.cart;
// output selector
export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems],
  cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity, 0));
export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartTotal = createSelector([selectCartItems],
  cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price, 0));

