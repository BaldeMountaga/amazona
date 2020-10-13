import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from "../constants/cartConstant";
import Cookie from 'js-cookie'
const { default: Axios } = require("axios")

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });
        //saving the items in cookies 
        const { cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } 
    catch (error) {  }
}

const removeFormCart = (productId) => (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: productId});

    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

const saveShipping = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_SHIPPING, payload: data });
}

const savePayment = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_PAYMENT, payload: data });
}
export { addToCart, removeFormCart, saveShipping, savePayment}