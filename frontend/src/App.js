import React, { useEffect, useSelector, useReducer } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import {initialStore, storeReducer} from './native-reducers/storeReducer';
import {initialAuth, authReducer} from './native-reducers/authReducer'

import './App.css';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import SigninScreen from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterScreen';  
import ProductsScreen from './Screens/ProductsScreens';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import { initialAppState, mainAppReducer } from './native-reducers/mainAppReducer';
import AddProduct from './Screens/AddProduct';


export const AppContext = React.createContext();

function App() {

  const [storeState, dispatchStoreState] = useReducer(storeReducer, initialStore);
  const [authState, dispatchAuthState] = useReducer(authReducer, initialAuth);
  const [appState, dispatchAppState] = useReducer(mainAppReducer, initialAppState);

  useEffect(()=> {
    const cookie = document.cookie;
    if (cookie) {
      axios.get('/api/users/get-user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth_token')}`
        }
      })
      .then(response=> {
        dispatchAuthState({type: "SET_USER", name: response.data.name, email: response.data.email})
        dispatchAppState({type: "SET_AUTH", is_authenticated: true})
      })
      .catch(exception=> {
        console.log(exception)
      })
    }
  }, [])

  return (
  
    <AppContext.Provider value={{
      appState: appState,
      dispatchAppState: dispatchAppState,
      storeState: storeState, 
      dispatchStoreState: dispatchStoreState,
      authState: authState,
      dispatchAuthState: dispatchAuthState
      }}>
        <BrowserRouter>
                  <Switch>
                      <Route exact={true} path = "/products" component = { ProductsScreen}/>
                      <Route path="/products/new" component={AddProduct} />
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
