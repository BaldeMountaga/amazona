import React, { useEffect, useState } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
import {savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { FaCcPaypal } from "react-icons/fa";

function PaymentScreen(props){
    
    const [paymentMethod, setPaymentMethod] = useState('');
    
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment({paymentMethod}));
        props.history.push('placeorder');
    }
    
return (
        <div>
            <CheckoutSteps step1 step2 step3 />
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        
                        <li>
                            <h2>Payment</h2>
                        </li>
                        <li>
                            <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label className="payment-style" htmlFor="paymentMethod"><FaCcPaypal size="35"/></label>
                        </li>
                        
                        <li>
                            <button type="submit" className="button primary">Continue</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}
export default PaymentScreen;