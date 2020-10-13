import React, { useEffect, useSelector, useReducer } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import {initialStore, storeReducer} from './native-reducers/storeReducer';
import {initialAuth, authReducer} from './native-reducers/authReducer'

import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreens';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';


export const AppContext = React.createContext();

function App() {

  const [storeState, dispatchStoreState] = useReducer(storeReducer, initialStore);
  const [authState, dispatchAuthState] = useReducer(authReducer, initialAuth);

  // useEffect(()=> {
  //   const cookie = document.cookie;
  //   if (cookie) {
  //     axios.get('/api/get-user', {
  //       header: {
  //         Authorization: `Bearer ${document.cookie.substring(10)}`
  //       }
  //     })
  //   }
  // }, [])

  // storeState.products, storeState.cart

  return (
  
    <AppContext.Provider value={{
      storeState: storeState, 
      dispatchStoreState: dispatchStoreState,
      authState: authState,
      dispatchAuthState: dispatchAuthState }}>
        <BrowserRouter>
      
                  <Switch>
                    <Route path = "/products" component = { ProductsScreen}/>
                    <Route path = "/shipping" component = {ShippingScreen }/>
                    <Route path = "/payment" component = {PaymentScreen }/>
                    <Route path = "/placeorder" component = {PlaceOrderScreen }/>
                    <Route path = "/signin" component = { SigninScreen}/>
                    <Route path = "/register" component = { RegisterScreen}/>
                    <Route path = "/product/:id" component = { ProductScreen }/>
                    <Route path = "/cart" render = {()=> <CartScreen /> }/> 
                    <Route path = "/" exact={true} component = { HomeScreen }/>            
                  </Switch>
        </BrowserRouter>
    </AppContext.Provider>
  )
}


export default App;
