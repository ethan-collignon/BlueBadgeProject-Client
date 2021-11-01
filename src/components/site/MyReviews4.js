import React, {useState} from 'react';
import ReviewCreate from '../pagecomponents/Review/ReviewIndex';
import {BrowserRouter as Router} from 'react-router-dom';


const MyReviews = (props) => {
 
    return (
        <div>
            <Router>
            <ReviewCreate />
            </Router>
        </div>
    )
}

export default MyReviews;