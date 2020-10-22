import React, {useContext, useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import { GiShoppingCart } from "react-icons/gi";

import Loader from "./Loader";
import { appReducer, initialState } from '../native-reducers/CartReducer';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';


const ProductImage = props => {
    const [imageSrc, setImageSrc] = useState(null);

    const app_context = useContext(AppContext);

    const imageStyle = {
        width: "100%",
        height: 200,
        margin: "5px"
    }

    useEffect(()=> {
        axios.get(`/image/${props.imageName}`)
            .then(response=> {
                setImageSrc(response.data.imageUrl)
                // const image = {}
                // image[`${props.imageName}`] = response.data.imageUrl;
                app_context.dispatchStoreState({type: "ADD_PRODUCT_IMAGE", image: {name: props.imageName, src: response.data.imageUrl}})
            })
            .catch(exception=> {
                console.log(exception.response)
            })
    }, [])
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
        fontSize: 20,
        padding: 0,
        margin: 0,
        float: "right",
        fontWeight: "bold"
    }

    const nameStyle = {
        fontSize: 20,
        padding: 0,
        margin: 0,
        float: "left"
    }

    const app_context = useContext(AppContext);

    const product = {
        ...props
    }



    const addToCart = () => {
        console.log("Adding to cart")
        app_context.dispatchStoreState({type: "SET_CART", product: product})
    }
  
    return (
            <div style={containerStyle} className="cart-content">
                {/* I added the link to the image the will help whenever you click on the image you should go 
                to the product details called productScreen.js */}
                <Link to="/product/:id"><ProductImage imageName={props.image} /></Link>
                <p style={priceStyle}>${props.price}</p>
                <p style={nameStyle}>{props.name}</p>
                
                <div style={{marginTop: "4rem"}} className="cartContent">
                        <button className="btnStyle" onClick={addToCart}>Add to card 
                            <a className="iconStyle" href="#"><GiShoppingCart size="20"/><span>
                            </span></a>
                        </button>
                </div>
            </div>
    );
}

export default ProductItem;