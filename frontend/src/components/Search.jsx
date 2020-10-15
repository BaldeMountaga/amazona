import React from 'react';
import { useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";

function Search(props) {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInput= val =>{
        setSearchInput(val)
    }
    

    return (
        <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar search">
                        <input className="search_input" type="text" value={searchInput} 
                            onChange={(e) => handleSearchInput(e.target.value)} />
                        <a href="#" className="search_icon">< BiSearchAlt2 size="25"/></a>
                    </div>
                </div>
            </div>
    );
}

export default Search;