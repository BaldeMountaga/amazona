import React from 'react';


export const initialAuth = {
    user: {
        name: "",
        email: ""
    },
}


export const authReducer = (action, state) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: {...action.user}
            }
        default:
            return initialAuth;
    }
}