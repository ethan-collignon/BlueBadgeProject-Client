import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReviewTable from './ReviewTable';
import ReviewEdit from './EditReview';
import ReviewCreate from './ReviewCreate';
import MoviePage from '../../site/MoviePage';
import './ReviewIndex.css';



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
        <Container style={{backgroundColor: "slategrey"}}>
            <Row>
                <Col width="20">
                    <MoviePage/>
                </Col>
                <Col width="20">
                    <ReviewCreate fetchReviews={fetchReviews} token={props.token}/>
                </Col>
                <Col md="30">
                    <ReviewTable reviews={reviews} editUpdateReview={editUpdateReview} updateOn={updateOn} fetchReviews={fetchReviews} token={props.token}/>
                </Col>
                {updateActive ? <ReviewEdit reviewToUpdate={reviewToUpdate} updateOff={updateOff} token={props.token} fetchReviews={fetchReviews} reviews={reviews}/> : <></>}
            </Row>
        </Container>
        </div>
    )
}

export default ReviewIndex;