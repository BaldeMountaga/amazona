import React from 'react';


export const initialAuth = {
    name: "",
    email: ""
}


export const authReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                name: action.name,
                email: action.email
            }
        default:
            return initialAuth;
    }
}