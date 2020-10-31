import React from "react";


const Favorite = () => {
    return (
        <li className="d-none d-lg-inline nav-item dropdown dropdown-md dropdown-hover">
            <a className="nav-icon" id="navbarDropdown-7" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"><i className="icon-heart"></i></a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown-7">
                <div className="row gutter-3">
                    <div className="col-12">
                        <h3 className="eyebrow text-dark fs-16 mb-1">My Favorites</h3>
                        <p className="text-muted fs-14"><a href="#" className="underline">Sign
                            in</a> to keep your saves for up to 60 days.</p>
                    </div>
                    <div className="col-12">
                        <div className="cart-item">
                            <a href="#!" className="cart-item-image"><img
                                src="assets/images/demo/product-1.jpg" alt="Image"/></a>
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
                        <a href="#" className="btn btn-primary btn-block">Add all to cart</a>
                        <a href="#" className="btn btn-outline-secondary btn-block">View
                            favorites</a>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default Favorite;