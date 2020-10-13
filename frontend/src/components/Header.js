import React from 'react';
import {Link} from 'react-router-dom';

import  { useSelector } from 'react-redux'



const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
}


const Header = () => {

    const userSingin = useSelector(state=> state.userSingin);
    const { userInfo } = {...userSingin};

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
                  userInfo ? <Link to="/profile">{userInfo.name}</Link>
                  : <Link to="/signin">Sign In</Link>
                }
            </div>
        </header>
    )
}


export default Header;