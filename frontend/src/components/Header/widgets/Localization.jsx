import React from "react";


const Localization = () => {
    return (
        <li className="d-none d-lg-inline nav-item dropdown dropdown-md dropdown-hover">
            <a className="nav-icon" id="navbarDropdown-5" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"><i className="icon-globe"></i></a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown-5">
                <fieldset>
                    <div className="row">
                        <div className="col-12">
                            <div className="select-frame">
                                <select className="custom-select custom-select-lg"
                                        id="countrySelect1">
                                    <option value="1">United States</option>
                                    <option value="2">Germany</option>
                                    <option value="3">France</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="select-frame">
                                <select className="custom-select custom-select-lg"
                                        id="curencySelect1">
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                    <option value="3">RUB</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </li>
    )
}


export default Localization;