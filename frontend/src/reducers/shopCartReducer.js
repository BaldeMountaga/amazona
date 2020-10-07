import {CartActions} from '../actions/shopCartActions';

export const shopCartReducer = (cart=[], action) => {
  switch(action.type){
    case CartActions.ADD_TO_CART:
      return [...cart, action.payload];

    case CartActions.REMOVE_FROM_CART:
      return cart.filter(item => item._id !== action.payload);

    default:
      return cart;
  }
}
