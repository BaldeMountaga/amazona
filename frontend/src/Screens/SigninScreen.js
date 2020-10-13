import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';
import { Link } from 'react-router-dom';

import Base from '../components/Base';

import {AppContext} from '../App';


function SigninScreen(props){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //redirectiing user
    const redirect = props.location.search?props.location.search.split("=")[1]: '/';

    // mainAppContext
    const app_context = useContext(AppContext);
    
    useEffect(() => {
        if(app_context.appState.isAuthenticated){
            props.history.push(redirect);
        }
        return () => {
           //
        }
    }, [app_context.appState.isAuthenticated]);

const submitHandler = (e) => {
    app_context.dispatchAppState({type: "SET_LOADING", is_loading: true})
    e.preventDefault();
    console.log({
        email: email,
        password: password
    })
    axios.post('/api/users/signin', {
        email: email,
        password: password
    })
    .then(response=> {
        app_context.dispatchAuthState({type: "SET_USER", name: response.data.name, email: response.data.email})
        app_context.dispatchAppState({type: "SET_AUTH", is_authenticated: true})
        /**
         * Cookies are deprecated
         */
        // Cookie.set('auth_token', response.data.token) 
        localStorage.setItem("auth_token", response.data.token);
        props.history.push(redirect);
        app_context.dispatchAppState({type: "SET_LOADING", is_loading: false})
    })
    .catch(exception=> {
        console.log(exception);
        app_context.dispatchAppState({type: "SET_ERROR", error: "An Error Occured"})
        app_context.dispatchAppState({type: "SET_LOADING", is_loading: true})
    })
    app_context.dispatchAppState({type: "SET_LOADING", is_loading: false})
}

    
return (
    <>
        <Base>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li><h2>Sign-In</h2></li>
                        <li>
                            {app_context.appState.isAuthenticated && <div>Loading...</div>}
                            {app_context.appState.error && <div>{app_context.appState.error}</div>}
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"  onChange={(e) => setEmail(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit" className="button primary">Sign-In</button>
                        </li>
                        <li>New to amazona?</li>
                        <li>
                            <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center">Create your amazona account</Link>
                        </li>
                    </ul>
                </form>
            </div>
        </Base>
    </>
)
}
export default SigninScreen;