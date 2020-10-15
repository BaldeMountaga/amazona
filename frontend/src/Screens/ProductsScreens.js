import React, { useContext, useEffect, useState } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts, saveProduct, deleteProduct } from '../actions/productActions';
import { AppContext } from '../App';


function ProductsScreen(props){

    const store_context = useContext(AppContext);
    
return(
    
    <div>
        <div className="content content-margined">
            <div className="product-header">
                <h3>Products</h3>
                <Link to={"/products/new"} className="button primary">Create Product</Link>
            </div>
        </div>
        <div className="product-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store_context.storeState.products.map(product => ( 
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                                <button className="button">Edit</button>
                                {' '} 
                                {/* <button className="button" onClick={() => deleteHandler(product)}>Delete</button> */}
                            </td>
                        </tr>
                        ))}
                    
                    </tbody>
                </table>
            </div>
</div>
) 
}
export default ProductsScreen;