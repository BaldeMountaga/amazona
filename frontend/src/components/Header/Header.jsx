import React from "react";
import Topbar from "./widgets/Topbar";
import Navbar from "./widgets/Navbar";


const Header = props => {
    return (
        <header className="header header-absolute">
            {props.topbar ? <Topbar /> : null}
            <div className="container">
                <Navbar />
            </div>
        </header>
    )
}


export default Header;