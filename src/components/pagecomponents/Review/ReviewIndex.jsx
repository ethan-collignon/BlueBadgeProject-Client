import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import ReviewTable from './ReviewTable';
import ReviewEdit from './EditReview';
import ReviewCreate from './ReviewCreate';
import MoviePage from '../../site/MoviePage';
import './ReviewIndex.css';
import gif from '..//..//..//assets/MOVIES.gif';



const ReviewIndex = (props) => {  
    const [reviews, setReviews] = useState([]);
    const [updateActive, setUpdateActive] = useState(false); 
    const [reviewToUpdate, setReviewToUpdate] = useState({});

    const fetchReviews = () => { 
        fetch('http://localhost:3001/review/', {
            method: 'GET',
            headers: new Headers ({ 
                'Content-Type': 'application/json',
                'Authorization': props.token //bearer token goes here
            })
        }).then((res) => res.json()) 
        .then((reviewData) => {
            setReviews(reviewData)
        })
        .catch(err => console.log(err))
    }
    
    // const clearLocalStorage = () => {
    //     localStorage.clear();
    //     setSessionToken(undefined);
    //   }

    const editUpdateReview = (ReviewEdit) => { //HELP HERE TOO PLEASE
        setReviewToUpdate(ReviewEdit);
        console.log(ReviewEdit);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => { 
        fetchReviews();
    }, []) 

    return(
        < div style={{backgroundColor: "#bc2026"}}>
            <div class="header">
            <div><img src={gif} class="img" alt='loading' height='100'></img></div>
            <h1><u>Movie Review App</u></h1>
            <div class="power">
            <Button class="bi bi-power" width="10" height="10" onClick={() => props.clearLocalStorage /*HELP WITH THIS*/}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
            <path d="M7.5 1v7h1V1h-1z"/>
            <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
            </svg>
            </Button>
            </div>
            </div>
            <p>Welcome to Sockem Boppers movie review app. Once you create an account you can search the latest Movies and don’t worry if you’re more into the classics, foreign, or whatever your taste is we got you covered. Sockem Boppers also allows you to create reviews and rating your favorite masterpieces, invite your family and friends so you can see each other’s reviews and ratings and later argue about around the dinner table or during an intense game of monopoly on family/friend game night. So why not give our App a try today and get geared up for those disagreements headed your way.</p>
        <Container style={{backgroundColor: "slategrey", borderRadius: "2px"}}>
            <Row>
                <Col width="35">
                    <MoviePage/>
                </Col>
                <Col width="5" height="20">
                    <br />
                    <ReviewCreate fetchReviews={fetchReviews} token={props.token}/>
                </Col>
                <Col md="30">
                    <ReviewTable reviews={reviews} editUpdateReview={editUpdateReview} updateOn={updateOn} fetchReviews={fetchReviews} token={props.token}/>
                </Col>
                {updateActive ? <ReviewEdit reviewToUpdate={reviewToUpdate} updateOff={updateOff} token={props.token} fetchReviews={fetchReviews} reviews={reviews}/> : <></>}
            </Row>
        </Container>
        <br />

        </div>
    )
}

export default ReviewIndex;