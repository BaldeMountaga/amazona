import React from 'react';

import { act } from "react-dom/test-utils";

export const initialState = {
    cart: [{},{},{}],
    cartLength: 0
}

export const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartLength: state.cartLength + 1
            }
        default:
            return initialState;
    }
}