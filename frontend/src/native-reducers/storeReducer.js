import React from 'react';


/**
 * 1. Create reducer() return a state
 * 2. Use Reducer Function. => const [appState, dispatchAppState] = useReducer() const [state, setSTate] = useState()
 * dipatchAppState({type: "SET_PRODUCT", products: [] })
 * 3. Create Context 
 * 4. useContext ===> Context Consume
 */

export const initialStore = {
    products: [],
    cart: []
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "SET_CART":
            return {
                ...state,
                cart: action.cart
            }
        default:
            return initialStore;
    }
}