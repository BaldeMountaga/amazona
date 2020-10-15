import React from 'react';

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

    return (
        <div style={containerStyle}>
            <p style={priceStyle}>${props.price}</p>
            <p style={nameStyle}>{props.name}</p>
        </div>
    );
}

export default ProductItem;