import React from 'react';
import { useState } from 'react';

const FormSearchSimple = () => {
    const [ searachText, setSearchText ] = useState('');
    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <form
            className="ps-form--search-simple"
            action="index.html"
            method="get">
            <input
                className="form-control"
                type="text"
                placeholder="Search..."
                onChange={ handleSearchTextChange }
            />
            <button>
                <i className="icon icon-magnifier"></i>
            </button>
        </form>
    );
};

export default FormSearchSimple;
