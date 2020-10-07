import {combineReducers} from 'redux';

import {productListReducer, productDetailsReducer} from './productReducers';
import {shopCartReducer} from './shopCartReducer';
import {cartReducer} from './cartReducers';

const rootReducer = combineReducers({
  productDetails: productDetailsReducer,
  productList: productListReducer,
  cart: cartReducer,
  shopCart: shopCartReducer
});

export default rootReducer;