import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Base from '../components/Base';
import { AppContext } from '../App';
import ProductItem from '../components/ProductItem';


function HomeScreen(props){

const app_context = useContext(AppContext);


useEffect(() => {
  if (app_context.storeState.products.length <= 0) {
    axios.get('/api/products/')
    .then(response=> {
      app_context.dispatchStoreState({type: "SET_PRODUCTS", payload: response.data})
    })
    .catch(exception=> {
      console.log(exception);
    })
  }
  return () => {
    //
  }; 
}, [])


return app_context.appState.isLoading ? <div>Loading...</div> : app_context.appState.error ? <div>{app_context.appState.error}</div> :
( 
  <>
    {/* <Header /> */}
    <Base sidebar={true} header={true}>
      {/* <Sidebar /> */}
        <main className="main">
            <div className="content"> 
              <ul className="products">
                {
                  app_context.storeState.products.map(product =>
                  //   <li key={product._id}>
                  //     <div className="product">
                  //         <Link to={'/product/' + product._id}>
                  //           <img className="product-img" src={product.img} alt="product" />
                  //         </Link>
                        
                  //         <div className="prouduct-name">
                  //               <Link to={'/product/' + product._id}>{product.name}</Link>
                  //         </div>
                  //         <div className="prouduct-brand">{product.brand}</div>
                  //         <div className="product-price">{product.price}</div>
                  //         <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
                  //     </div>
                  // </li>
                  <ProductItem key={product._id} {...product} />
                  )
                }
              </ul>
            </div>
          </main>
    </Base>
  </>
)
      
}
export default HomeScreen;