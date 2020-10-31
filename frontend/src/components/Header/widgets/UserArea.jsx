import React from "react";


const UserArea = () => {
    return (
        <li className="nav-item dropdown dropdown-md dropdown-hover">
            <a className="nav-icon dropdown-toggle" id="navbarDropdown-6" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="icon-user d-none d-lg-inline-block"></i>
                <span className="d-inline-block d-lg-none">Account</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown-6">
                <div className="row gutter-2">
                    <div className="col-12">
                        <fieldset>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-label-group">
                                        <input type="text" id="inputName"
                                               className="form-control form-control-lg"
                                               placeholder="Name" required="" value="Dumitru"/>
                                        <label htmlFor="inputName">First Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-label-group">
                                        <input type="text" id="inputSurname"
                                               className="form-control form-control-lg"
                                               placeholder="Surname" required=""/>
                                        <label htmlFor="inputSurname">Surname</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-12 text-center">
                        <a href="#" className="underline fs-14">Forgot Password ?</a>
                    </div>
                    <div className="col-12">
                        <a href="#" className="btn btn-primary btn-block">Sign In</a>
                        <a href="#" className="btn btn-outline-secondary btn-block">Create
                            Account</a>
                    </div>
                </div>
            </div>
        </li>

    )
}


export default UserArea;