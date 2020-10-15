import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
//import { addToCart, removeFormCart } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { cartReducer } from '../reducers/cartReducers';
// import from '../components/cartScreen.css';

function PlaceOrderScreen(props) {

    //access the cart from redux store
    const shopCart = useSelector(state => state.shopCart);
    const shipping = useSelector(state => state.shipping);
    const payment = useSelector(state => state.payment);

    const dispatch = useDispatch();
    const history = useHistory();

    const chechoutHandler = () => {
        history.push("/signin?redirect=shipping");
    }

    console.log('CART', shopCart, shipping, payment );
    
    if(!shipping.address){
        props.history.push("/shipping");
    }else if(!payment.paymentMethod){
        props.history.push("/payment");
    }

    const itemsPrice = shopCart.reduc((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = 0.15 * itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice; 

    const placeOrderHandler = () =>{

    }

    return (
        <div className="placeorder">
            <div>
                <CheckoutSteps step1 step2 step3 step4 />
                {
                    shopCart.map(item => (
                        <React.Fragment>
                            <div className="placeorder-info">
                                {/**getting user details */}
                                <div>
                                    <h3>Shipping</h3>
                                    <div>
                                        {cartReducer.shipping.address}, {cartReducer.shipping.city},
                                        {cartReducer.shipping.postalCode}, {cartReducer.shipping.country}
                                    </div>
                                </div>
                                {/**method of payment */}
                                <div>
                                    <h3>Payment</h3>
                                    <div>
                                        Payment Method: {cartReducer.payment.paymentMethod}
                                    </div>
                                </div>
                                <div>
                                    <ul className="cart-list-container">
                                        <li>
                                            <h3>Shopping Cart</h3>
                                            <div  className="cart-price">Price</div>
                                        </li> 
                                        <li>
                                            <div className="cart-image">
                                                <img src={item.img} alt="product"/>
                                            </div>                              
                                            <div className="cart-name">
                                                <div className="prod-name">
                                                    <Link to={"/product/" + item.product}>
                                                        {item.name}
                                                    </Link> 
                                                </div>
                                                <div className="qty">
                                                    Qty: {item.qty}
                                                </div>
                                            </div>
                                            <div className="cart-price">
                                                ${item.price}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className="placeorder-action">
                                <ul>
                                    <li>
                                        <button onClick={placeOrderHandler}>Place Order</button>
                                    </li>
                                    <li>
                                        <h3>Order Summary</h3>
                                    </li>
                                    <li>
                                        <div>Items</div>
                                        <div>${itemsPrice}</div>
                                    </li>
                                    <li>
                                        <div>Shipping</div>
                                        <div>${shippingPrice}</div>
                                    </li>
                                    <li>
                                        <div>Tax</div>
                                        <div>${taxPrice}</div>
                                    </li>
                                    <li>
                                        <div>Order Total</div>
                                        <div>${totalPrice}</div>
                                    </li>
                                </ul>
                                <button onClick={chechoutHandler} disabled={shopCart.length === 0}>
                                    Proceed to chechout
                                </button>
                            </div>
                        </React.Fragment>))
                }
            </div>
        </div>
    );
}
export default PlaceOrderScreen;
