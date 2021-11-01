import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './Navbar';


const SearchPage = () => {

    return (
        <div>
           <Router>
             <Nav />
            </Router>
    </div>
    )
}

export default SearchPage;

