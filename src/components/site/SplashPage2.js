import React, {useState} from 'react';
import ReviewCreate from '../pagecomponents/Review/ReviewCreate';
import Nav from './Navbar';
import {BrowserRouter as Router} from 'react-router-dom';



const Splash = (props) => {
 
    return (
        <div>
            {/*<ReviewCreate /> */}
             <Nav clearLocalStorage={props.clearLocalStorage} /> 
        </div>
      
    
    )
}

export default Splash;