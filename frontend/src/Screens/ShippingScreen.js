import React, { useEffect, useState } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

import Base from '../components/Base';


function ShippingScreen(props){
    
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping({address, city, postalCode, country}));
        props.history.push('payment');
    }
    
return <Base>
        <CheckoutSteps step1 step2 />
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    
                    <li>
                        <h2>Shipping</h2>
                    </li>
                    <li>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address"  onChange={(e) => setAddress(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="city">City</label>
                        <input  type="text" name="city" id="city"  onChange={(e) => setCity(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="postalcode">Postal Code</label>
                        <input type="postalcode" name="postalcode" id="postalcode"  onChange={(e) => setPostalCode(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="country">Country</label>
                        <input type="country" name="country" id="country"  onChange={(e) => setCountry(e.target.value)} />
                    </li>
                    
                    <li>
                        <button type="submit" className="button primary">Continue</button>
                    </li>
                </ul>
            </form>
        </div>
    </Base>
}
export default ShippingScreen;