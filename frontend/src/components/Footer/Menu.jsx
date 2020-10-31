import React from "react";


const Menu = () => {
    return (
        <div className="order-1 col-md-8 col-lg-4">
            <div className="row">
                <div className="col">
                    <h4 className="eyebrow mb-1">Company</h4>
                    <ul className="menu-list">
                        <li className="menu-list-item"><a href="#" className="menu-list-link">Our story</a></li>
                        <li className="menu-list-item"><a href="#" className="menu-list-link">Careers</a></li>
                        <li className="menu-list-item"><a href="#" className="menu-list-link">Press</a></li>
                        <li className="menu-list-item"><a href="#" className="menu-list-link">Contact</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4 className="eyebrow mb-1">Help Center</h4>
                    <ul className="menu-list">
                        <li className="menu-list-item"><a href="#" className="menu-list-link">Shipping</a></li>
                        <li className="menu-list-item"><a href="#" className="menu-list-link">Returns</a></li>
                        <li className="menu-list-item"><a href="#" className="menu-list-link">Payment</a></li>
                        <li className="menu-list-item"><a href="#" className="menu-list-link">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Menu;