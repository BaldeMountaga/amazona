export const initialAppState = {
    isAuthenticated: false,
    isLoading: false,
    error: ""
}


export const mainAppReducer = (state, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state, 
                isAuthenticated: action.is_authenticated
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.is_loading
            }
        default:
            return initialAppState;
    }
}