import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import { AppContext } from '../App';



const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
}


const Header = () => {

    const app_context = useContext(AppContext)

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
                  app_context.appState.isAuthenticated ? <Link to="/profile">{app_context.authState.name}</Link>
                  : <Link to="/signin">Sign In</Link>
                }
            </div>
        </header>
    )
}


export default Header;