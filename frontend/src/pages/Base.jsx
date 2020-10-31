import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const Base = props => {
    return (
        <>
            <Header topbar={props.topbar} />
            {props.children}
            <Footer />
        </>
    )
}


export default Base;