import React, {useState} from 'react';
import axios from 'axios';

import Base from '../components/Base';



const FormGroup = props => {
    
    const inputStyle = {
        boxSizing: "border-box",
        width: "100%",
        marginBottom: "2.4rem"
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input onChange={props.onChange} value={props.value} style={inputStyle} type="text"/>
        </div>
    )
}


const FormButton = props => {
    const styles = {
        width: "100%",
        padding: '0.7rem 0.4rem',
        backgroundColor: props.bgColor,
        border: "1px solid #ddd",
        borderRadius: "0.4rem",
        fontSize: "14px",
        marginBottom: "1.4rem"
    }
    return (
        <button type={props.type} style={styles}>{props.name}</button>
    )
}


const AddProduct = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    // const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInstock, setCountInstock] = useState('');
    const [description, setDescription] = useState('');

    const containerStyles = {
        margin: "5px auto",
        width: "486px",
        border: "1px solid #ddd",
        padding: "2rem 1.7rem"
    }
    
    const formStyles = {
        width: "100%"
    }


    const addProduct = e => {
        e.preventDefault();
        const productItem = {
            name: name,
            price: price,
            brand: brand,
            category: category,
            countInstock: countInstock,
            description: description
        }
        
        axios.post('/api/products/', productItem, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth_token')}`
            }
        })
        .then(response=> {
            console.log(response.data);
        })
        .catch(exception=> {
            console.log(exception);
        })
        
    }

    return (
        <>
            <Base header={true} sidebar={true}>
                <main style={containerStyles} className="container">
                    <h3 style={{fontSize: 32, marginBottom: "2.8rem"}}>Create Product</h3>
                    <form onSubmit={addProduct} style={formStyles}>
                        <FormGroup onChange={(e)=> setName(e.target.value)} value={name} label="Name" />
                        <FormGroup onChange={(e)=> setPrice(e.target.value)} value={price} label="Price" />
                        <FormGroup onChange={(e)=> setBrand(e.target.value)} value={brand} label="Brand" />
                        <FormGroup onChange={(e)=> setCategory(e.target.value)} value={category} label="Category" />
                        <FormGroup onChange={(e)=> setCountInstock(e.target.value)} value={countInstock} label="CountInStock" />
                        <FormGroup onChange={(e)=> setDescription(e.target.value)} value={description} label="Description" />
                        <FormButton type={'submit'} bgColor={'#f0c040'} name="Create" />
                        <FormButton bgColor={'#f0f0f0'} name={'Back'} />
                    </form>
                </main>
            </Base>
        </>
    )
}


export default AddProduct;