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
    cart: [],
    productImages: [],
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":    
            return {
                ...state,
                products: action.payload
            }
        case "SET_CART":
            console.log(action.product)
            return {
                ...state,
                cart: [...state.cart, action.product]
            }
        case "ADD_PRODUCT_IMAGE":
            return {
                ...state,
                productImages: [...state.productImages, action.image]
            }
        default:
            return initialStore;
    }
}