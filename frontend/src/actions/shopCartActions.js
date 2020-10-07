export const CartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
};

export const addItemToCart = (item) => {
  return {
    type: CartActions.ADD_TO_CART,
    payload: item
  }
}

export const removeItemFromCart = (itemId) => {
  return {
    type: CartActions.REMOVE_FROM_CART,
    payload: itemId
  }
}
