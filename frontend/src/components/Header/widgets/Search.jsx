import React from "react";


const Search = () => {
    return (
        <li className="nav-item dropdown dropdown-md dropdown-hover">
            <a className="nav-icon dropdown-toggle" id="navbarDropdown-4" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="icon-search d-none d-lg-inline-block"></i>
                <span className="d-inline-block d-lg-none">Search</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown-4">
                <div className="form-group">
                    <input type="text" className="form-control" id="searchForm"
                           placeholder="Search for items and brands"/>
                </div>
            </div>
        </li>
    )
}


export default Search;