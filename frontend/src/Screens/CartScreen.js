import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import { addToCart, removeFormCart } from '../actions/cartActions';
// import from '../components/cartScreen.css';

function CartScreen(props) {

    //access the cart from redux store
    const shopCart = useSelector(state => state.shopCart);

    const dispatch = useDispatch();
    const history = useHistory();
    
    const removeFormCartHandler = (productId) => {
        dispatch(removeFormCart(productId));
    }

    const chechoutHandler = () => {
        history.push("/signin?redirect=shipping");
    }

    console.log('CART', shopCart);
    
    return (
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
                                        <img src={item.img} alt="product"/>
                                    </div>                              
                                    <div className="cart-name">
                                       <div className="prod-name">
                                           <Link to={"/product/" + item.product}>
                                                {item.name}
                                           </Link>
                                            
                                        </div>
                                        <div className="qty">
                                            Qty:
                                            <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                            {/* the feature e.target.value is not working when I select the qty I am getting erros fix it*/}
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            <button type="button" className="del-btn" onClick={() => removeFormCartHandler(item.product)}>
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
                        <div className="cart-action">
                                <h3>
                                    Subtotal ( {shopCart.reduce((a, c) => a + c.qty, 0)} items) 
                                    :
                                    ${shopCart.reduce((a, c) => a + c.price * c.qty, 0)}
                                
                                </h3>
                                <button className="button primary full-width" type="button" onClick={chechoutHandler} disabled={shopCart.length === 0}>
                                    Proceed to chechout
                                </button>
                        </div>
                    </React.Fragment>))
                }
            </div>
    );
}
export default CartScreen;

/**Sytle the cart to be responsive
 * secondly in the idex remove the button as styling for all your button on line 10
 */