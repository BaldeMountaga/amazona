import React from "react";


const Settings = () => {
    return (
        <div className="order-3 order-md-2 order-lg-3 col-md-4 col-lg-3">
            <h4 className="eyebrow mb-1">Region & Currency</h4>
            <div className="select-frame mb-2">
                <select className="custom-select custom-select-lg mb-2" id="countrySelect2">
                    <option value="1">United States</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                </select>
            </div>
            <div className="select-frame">
                <select className="custom-select custom-select-lg" id="curencySelect2">
                    <option value="1">USD</option>
                    <option value="2">EUR</option>
                    <option value="3">RUB</option>
                </select>
            </div>
            <ul className="list list--horizontal mt-2">
                <li><img src="assets/images/demo/visa-1.svg" className="payment" alt="Image" /></li>
                <li><img src="assets/images/demo/master-card-1.svg" className="payment" alt="Image" /></li>
                <li><img src="assets/images/demo/amex-1.svg" className="payment" alt="Image" /></li>
            </ul>
        </div>
    )
}


export default Settings;