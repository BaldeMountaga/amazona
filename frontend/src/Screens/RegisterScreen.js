import React, { useEffect, useState } from 'react';
import axios from 'axios';

import  { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {register } from '../actions/userActions';


function RegisterScreen(props){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();

    const redirect = props.location.search?props.location.search.split("=")[1]: '/';
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        return () => {
           //
        }
    }, [userInfo]);

const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(register(name, email, password));
    if (password === rePassword) {
        axios.post('/api/users/register', {
            name: name,
            email: email,
            password: password
        }).then(response=> {
            console.log(response);
            props.history.push(redirect);
        })
        .catch(exception=> {
            console.log(exception);
        })
    } else {
        console.log("Password mismatch")
    }
}
    
return <div className="form">
    <form onSubmit={submitHandler}>
        <ul className="form-container">
            
            <li>
                <h2>Create Account</h2>
            </li>
            <li>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
            </li>
            <li>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"  onChange={(e) => setName(e.target.value)} />
            </li>
            <li>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"  onChange={(e) => setEmail(e.target.value)} />
            </li>
            <li>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </li>
            <li>
                <label htmlFor="rePassword">Re-Enter Password</label>
                <input type="password" id="repassword" name="repassword" onChange={(e) => setRePassword(e.target.value)} />
            </li>
            <li>
                <button type="submit" className="button primary">Register</button>
            </li>
            <li>
                Already have an account ? 
                <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center">Log-In</Link>
            </li>
        
        </ul>
    </form>
    </div>
}
export default RegisterScreen;