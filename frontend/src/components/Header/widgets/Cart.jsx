import React from "react";


const Cart = () => {
    return (
        <li className="nav-item dropdown dropdown-md dropdown-hover">
            <a className="nav-icon dropdown-toggle" id="navbarDropdown-8" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="icon-shopping-bag d-none d-lg-inline-block"></i>
                <span className="d-inline-block d-lg-none">Bag</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown-8">
                <div className="row gutter-3">
                    <div className="col-12">
                        <h3 className="eyebrow text-dark fs-16 mb-0">My Bag</h3>
                    </div>
                    <div className="col-12">
                        <div className="cart-item">
                            <a href="#!" className="cart-item-image"><img
                                src="assets/images/demo/product-1.jpg" alt="Image" /></a>
                            <div className="cart-item-body">
                                <div className="row">
                                    <div className="col-9">
                                        <h5 className="cart-item-title">Bold Cuff Insert Polo
                                            Shirt</h5>
                                        <small>Fred Perry</small>
                                        <ul className="list list--horizontal fs-14">
                                            <li><s>$85.00</s></li>
                                            <li className="text-red">$42.00</li>
                                        </ul>
                                    </div>
                                    <div className="col-3 text-right">
                                        <ul className="cart-item-options">
                                            <li><a href="#" className="icon-x"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ul className="list-group list-group-minimal">
                            <li className="list-group-item d-flex justify-content-between align-items-center text-uppercase font-weight-bold">
                                Subtotal
                                <span>$78.00</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <a href="#" className="btn btn-primary btn-block">Add all to cart</a>
                        <a href="#" className="btn btn-outline-secondary btn-block">View
                            favorites</a>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default Cart;