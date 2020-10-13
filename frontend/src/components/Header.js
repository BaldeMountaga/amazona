import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import { AppContext } from '../App';



const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
}


const Header = () => {

    const app_context = useContext(AppContext)

    const logout = e => {
        app_context.dispatchAppState({type: "SET_AUTH", is_authenticated: false});
        localStorage.clear();
    }

    return (
        
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/" >JONA-HETA</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                {
                  app_context.appState.isAuthenticated ? <><Link to="/profile">{app_context.authState.name}</Link> <a href="#" onClick={logout}>Logout</a></>
                  : <Link to="/signin">Sign In</Link>
                }
            </div>
        </header>
    )
}


export default Header;