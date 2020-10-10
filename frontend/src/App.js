import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import  { useSelector } from 'react-redux'
import ProductsScreen from './screens/ProductsScreens';

function App() {

  const userSingin = useSelector(state=> state.userSingin);
  const { userInfo } = {...userSingin};

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/" >JONA-HETA</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                {
                  userInfo ? <Link to="/profile">{userInfo.name}</Link>
                  : <Link to="/signin">Sign In</Link>
                }
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <li><a href="index.html">Pants</a></li>
                <li><a href="index.html">Shirts</a></li>
            </ul>
        </aside>
        <main className="main">
            <div className="content"> 
              <Switch>
                <Route path = "/products" component = { ProductsScreen}/>
                <Route path = "/signin" component = { SigninScreen}/>
                <Route path = "/register" component = { RegisterScreen}/>
                <Route path = "/product/:id" component = { ProductScreen }/>
                <Route path = "/cart" component = { CartScreen }/> 
                <Route path = "/" exact={true} component = { HomeScreen }/>            
              </Switch>
            </div>
        </main> 
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
