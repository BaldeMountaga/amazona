import React, { useEffect, useState } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { listProducts, saveProduct, deleteProduct } from '../actions/productActions';


function ProductsScreen(props){
    
    const[modalVisible, setModalVisible] = useState(false);
    
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInstock, setCountInstock] = useState('');
    const [description, setDescription] = useState('');
    
    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;
    
    //implementing the save  button
    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    
    //implementing the delete button
    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave){
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
           //
        }
    }, [successSave, successDelete]);
    const openModal = (product) => {
        setModalVisible(true);
        
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInstock(product.countInstock)
       
    }

const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({
        _id: id, 
        name, 
        price, 
        image, 
        brand, 
        category, 
        countInstock, 
        description 
    }));
}

const deleteHandler = (product) =>{
    dispatch(deleteProduct(product._id));
}
    
return(
    <div>
        <div className="content content-margined">
            <div className="product-header">
                <h3>Products</h3>
                <button className="button primary" onClick={() => openModal({})}>Create Product</button>
            </div>
            
            {   modalVisible && 
                <div className="form">
                    <form onSubmit={submitHandler}>
                        <ul className="form-container">
                            <li><h2>Create Prodcut</h2></li>
                            <li>
                                {loadingSave && <div>Loading...</div>}
                                {errorSave && <div>{errorSave}</div>}
                            </li>
                            <li>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" value={name}   />
                                {/* onChange={(e) => setName(e.target.value)} */}
                            </li>
                            <li>
                                <label htmlFor="price">Price</label>
                                <input type="number"  min="0" max="10000" step="1" name="price" id="price"value={price} />
                                {/*  onChange={(e) => setPrice(e.target.value)} */}
                            </li>
                            <li>
                                <label htmlFor="image">Image</label>
                                <input type="text" name="image" id="image" value={image} />
                                {/* onChange={(e) => setImage(e.target.value)} */}
                            </li>
                            <li>
                                <label htmlFor="brand">Brand</label>
                                <input type="text" name="brand" id="brand" value={brand}  />
                                {/* onChange={(e) => setBrand(e.target.value)} */}
                            </li>
                            <li>
                                <label htmlFor="category">Category</label>
                                <input type="text" name="category" id="category" value={category}/>
                                {/* onChange={(e) => setCategory(e.target.value)} */}
                            </li>
                            <li>
                                <label htmlFor="countInStock">CountInStock</label>
                                <input type="number" name="CountInStock" id="CountInStock" value={countInstock} />
                                {/*  onChange={(e) => setCountInstock(e.target.value)} */}
                            </li>
                            <li>
                                <label htmlFor="description">Description</label>
                                <textarea  name="description" id="description" value={description} />
                                {/* onChange={(e) => setDescription(e.target.value)} */}
                            </li>
                            <li>
                                <button type="submit" className="button primary">{id? "Update" : "Create"}</button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Back</button>
                            </li>
                        </ul>
                    </form>
                </div>
            }
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
                        {products.map(product => ( 
                        <tr key={product._id}>
                            <td>{productList._id}</td>
                            <td>{productList.name}</td>
                            <td>{productList.price}</td>
                            <td>{productList.category}</td>
                            <td>{productList.brand}</td>
                            <td>
                                <button className="button" onClick={() => openModal(product)}>Edit</button>
                                {' '} 
                                <button className="button" onClick={() => deleteHandler(product)}>Delete</button>
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