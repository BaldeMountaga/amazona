import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


function HomeScreen(props){
  //defining hooks
const productList = useSelector(state => state.productList);
const { products, loading, error } = productList;
const dispatch = useDispatch();

useEffect(() => {
  dispatch( listProducts());

  return () => {
    //
  }; 
}, [])


return loading ? <div>Loading...</div> : error ? <div>{error}</div> :
<ul className="products">
    {
      products.map(product =>
        <li key={product._id}>
          <div className="product">
              <Link to={'/product/' + product._id}>
                <img className="product-img" src={product.img} alt="product" />
              </Link>
            
              <div className="prouduct-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <div className="prouduct-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
          </div>
      </li>)
    }
  </ul>
    
}
export default HomeScreen;