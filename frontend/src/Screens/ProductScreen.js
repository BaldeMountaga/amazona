import React, { useEffect, useState } from 'react';
import  { useDispatch, useSelector } from 'react-redux'
import {
    useHistory,
    useParams,
    Link
} from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import {addItemToCart} from '../actions/shopCartActions';


function ProductScreen(props){
    
    const [qty, setQty] = useState(1);
    const productDetails = useSelector (state => state.productDetails);  
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        dispatch(detailsProduct(params.id));
        return () => {
           //
        }
    }, []);

    const handleAddToCart = () => {
        dispatch(addItemToCart({...product, qty}));
        history.push("/cart");
    }
    
    console.log('PRODUCT', product);

    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Back to result</Link>
            </div>
            {
                loading ? <div>Loading...</div> :
                error ? <div>{error} </div> :
                (
                    <div className="details">
                        <div className="details-image">
                            <img src={product.img} alt="product"/>
                        </div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    {product.rating} Stars ({product.numReviews} Reviews)
                                </li>
                                <li>
                                    Price: <b>${product.price}</b>
                                </li>
                                <li>
                                    Description:
                                    <div>
                                        {product.description}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: {product.price}
                                </li>
                                <li>
                                    Status: {product.countInStock > 0 ? "In Stock" : ""}
                                </li>
                                <li>
                                    Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                        {[...Array(product.countInStock).keys()].map(x=>
                                            <option key={x+1} value={x+1}>{x+1}</option>)}
                                    </select>
                                </li>
                                <li>
                                    {
                                        product.countInStock > 0 && <button onClick={handleAddToCart} className="button">Add to Cart</button>
                                    } 
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
export default ProductScreen;