import React from 'react';
import { GiShoppingCart } from "react-icons/gi";

function ProductItem(props) {

    const containerStyle = {
        borderRadius: "0.7rem",
        padding: "1.5rem 2.8rem 0 1.5rem",
        margin: "1rem",
        width: "256px",
        textAlign: "center",
        boxShadow: "0 0.625rem 1rem rgba(35, 35, 35, 0.1)"
    }

    const priceStyle = {
        fontSize: 24
    }

    const nameStyle = {
        fontSize: 14
    }
   
    // const addToCart = () => {

    // }

    return (
            <div style={containerStyle} className="cart-content">
                <p style={priceStyle}>${props.price}</p>
                <p style={nameStyle}>{props.name}</p>
                <div className="cartContent">
                        <button className="btnStyle" >Add to card 
                            <a className="iconStyle" href="#"><GiShoppingCart size="20"/></a>
                        </button>
                </div>
            </div>
    );
}

export default ProductItem;