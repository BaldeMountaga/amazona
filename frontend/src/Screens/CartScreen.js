import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
// import from '../components/cartScreen.css';
import {AppContext} from '../App.js';

import Header from '../components/Header';

function CartScreen(props) {


    const app_context = useContext(AppContext);
    let shopCart = app_context.storeState.cart

    let allPrices = []
    if (shopCart.length > 0) {
        shopCart.map((item)=> allPrices.push(item.price) )
     }
    const total = allPrices.reduce((a, b)=> {return a + b}, 0)
    console.log("All PRices", allPrices);
    // console.log("First Cart ITem price", shopCart[0].price);


    const getImage = name => {
        const images = app_context.storeState.productImages;
        let imageSrc;
        for (let image of images) {
            // console.log(image.name, ":", name)
            if (image.name == name) {
                imageSrc = image.src;
            }
        }
        console.log("All images:", images)
        console.log("imageSrc", imageSrc)
        return imageSrc;
    }

    return (
        <>
            <Header />
            <div className="cart">
                {
                    shopCart.map(item => (
                    <React.Fragment>
                        {/* ADD ITEM INFORMATION */}
                        <div className="cart-list">
                            <ul className="cart-list-container">
                                <li>
                                    <h3>Shopping Cart</h3>
                                    <div  className="cart-price">Price</div>
                                </li> 
                                <li>
                                    <div className="cart-image">
                                        <img src={getImage(item.image)} alt="product"/>
                                    </div>                              
                                    <div className="cart-name">
                                       <div className="prod-name">
                                           <Link to={"/product/" + item.product}>
                                                {item.name}
                                           </Link>
                                            
                                        </div>
                                        <div className="qty">
                                            Qty:
                                            <select value={item.qty}>
                                            {/* the feature e.target.value is not working when I select the qty I am getting erros fix it*/}
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            <button type="button" className="del-btn">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        ${item.price}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </React.Fragment>))
                }
            </div>
            <div className="cart-action">
                <h3>
                    Subtotal ( {shopCart.length} items) 
                    :
                    ${total}
                
                </h3>
                <Link to="shipping" className="button primary full-width" type="button" 
                disabled={shopCart.length === 0}>
                    Proceed to chechout
                </Link>
            </div>
        </>
    );
}
export default CartScreen;

/**Sytle the cart to be responsive
 * secondly in the idex remove the button as styling for all your button on line 10
 */