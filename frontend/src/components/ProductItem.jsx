import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { GiShoppingCart } from "react-icons/gi";

import Loader from "./Loader";


const ProductImage = props => {
    const [imageSrc, setImageSrc] = useState(null);

    const imageStyle = {
        width: "100%",
        height: 200,
        margin: "5px"
    }

    useEffect(()=> {
        axios.get(`/image/${props.imageName}`)
            .then(response=> {
                setImageSrc(response.data.imageUrl)
            })
            .catch(exception=> {
                console.log(exception.response)
            })
    })
    return (
        imageSrc ? <img style={imageStyle} src={imageSrc}/> : <Loader />
    )
}

function ProductItem(props) {

    const containerStyle = {
        borderRadius: "0.7rem",
        padding: "0.5rem 0.2rem 0 1.5rem",
        margin: "1rem",
        width: "256px",
        maxHeight: 390,
        textAlign: "center",
        boxShadow: "0 0.625rem 1rem rgba(35, 35, 35, 0.1)"
    }

    const priceStyle = {
        fontSize: 24,
        padding: 0,
        margin: 0,
        float: "right",
        fontWeight: "bold"
    }

    const nameStyle = {
        fontSize: 22,
        padding: 0,
        margin: 0,
        float: "left"
    }
   
    // const addToCart = () => {

    // }

    return (
            <div style={containerStyle} className="cart-content">
                <ProductImage imageName={props.image} />
                <p style={priceStyle}>${props.price}</p>
                <p style={nameStyle}>{props.name}</p>
                <div style={{marginTop: "4rem"}} className="cartContent">
                        <button className="btnStyle" >Add to card 
                            <a className="iconStyle" href="#"><GiShoppingCart size="20"/></a>
                        </button>
                </div>
            </div>
    );
}

export default ProductItem;