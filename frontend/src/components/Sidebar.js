import React from 'react';

function Sidebar(props) {

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

    return (
        <>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <li><a href="index.html">Pants</a></li>
                <li><a href="index.html">Shirts</a></li>
            </ul>
        </aside>  
        </>
    );
}

export default Sidebar;