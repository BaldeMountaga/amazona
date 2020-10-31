import React from 'react';
import Cart from "./Cart";
import Favorite from "./Favorite";
import UserArea from "./UserArea";
import Localization from "./Localization";
import Search from "./Search";

import sales1 from '../../../assets/images/demo/menu-sale-1.jpg'
import sales2 from '../../../assets/images/demo/menu-sale-2.jpg'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a href="index-2.html" className="navbar-brand order-1 order-lg-2"><img src="assets/images/logo.svg"
                                                                                    alt="Logo"/></a>

            <div className="collapse navbar-collapse order-4 order-lg-1" id="navbarMenu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown dropdown-sm dropdown-hover">
                        <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown-1" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Home
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown-1">
                            <ul className="menu-list">
                                <li className="menu-list-item"><a href="index-2.html"
                                                                  className="menu-list-link">Homepage A</a></li>
                                <li className="menu-list-item"><a href="index-3.html"
                                                                  className="menu-list-link">Homepage B</a></li>
                                <li className="menu-list-item"><a href="index-4.html"
                                                                  className="menu-list-link">Homepage C</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="documentation.html">
                            Docs
                        </a>
                    </li>
                    <li className="nav-item dropdown-lg dropdown-hover">
                        <a className="nav-link dropdown-toggle text-red" href="#!" id="navbarDropdown-3"
                           role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sale
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown-3">
                            <div className="container">
                                <div className="row gutter-1">
                                    <div className="col-lg-6">
                                        <div className="card card-tile">
                                            <figure className="card-image equal equal-50">
                                                <span className="image"
                                                      style={{ backgroundImage: `url(${sales1})`}}></span>
                                            </figure>
                                            <div className="card-footer p-1">
                                                <div className="bg-white p-2">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <h4 className="fs-20"><a href="#">50% Sale on
                                                                Cardigans</a></h4>
                                                        </div>
                                                        <div className="col text-right">
                                                            <a href="#" className="underline">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card card-tile">
                                            <figure className="card-image equal equal-50">
                                                <span className="image"
                                                      style={{ backgroundImage: `url('${sales2}')`}}></span>
                                            </figure>
                                            <div className="card-footer p-1">
                                                <div className="bg-white p-2">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <h4 className="fs-20"><a href="#">20% Sale on
                                                                Jewelery</a></h4>
                                                        </div>
                                                        <div className="col text-right">
                                                            <a href="#" className="underline">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="collapse navbar-collapse order-5 order-lg-3" id="navbarMenu2">
                <ul className="navbar-nav ml-auto position-relative">
                    <Search />
                    <Localization />
                    <UserArea />
                    <Favorite />
                    <Cart />
                </ul>
            </div>

            <div className="order-2 d-flex d-lg-none" id="navbarMenuMobile">
                <ul className="navbar-nav navbar-nav--icons ml-auto position-relative">

                    {/* Search */}
                    <li className="nav-item">
                        <a href="#" className="nav-icon"><i className="icon-search"></i></a>
                    </li>

                    {/* Cart */}
                    <li className="nav-item dropdown dropdown-md dropdown-hover">
                        <a href="#" className="nav-icon"><i className="icon-shopping-bag"></i></a>
                    </li>

                    {/* Menu */}
                    <li className="nav-item dropdown dropdown-md dropdown-hover">
                        <a href="#" className="nav-icon" data-toggle="collapse" data-target=".navbar-collapse"
                           aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="icon-menu"></i>
                        </a>
                    </li>

                </ul>
            </div>

        </nav>
    )
}


export default Navbar;