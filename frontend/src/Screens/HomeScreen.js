import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props){
    return <ul className="products">
    {
      data.products.map(product =>
        <li>
          <div className="product">
              <Link to={'/product/' + product._id}>
                <img className="product-img" src={product.img} alt="product" />
              </Link>
            
              <div className="prouduct-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <div class="prouduct-brand">{product.brand}</div>
              <div class="product-price">{product.price}</div>
              <div class="product-rating">{product.rating} Stars ({product.numReviews})</div>
          </div>
      </li>)
    }
  </ul>
    
}
export default HomeScreen;