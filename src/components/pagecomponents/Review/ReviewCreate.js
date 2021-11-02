import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ReviewCreate = (props) => {
    const [reviewTitle, setReviewTitle] = useState('');
    const [nameOfMovie, setNameOfMovie] = useState('');
    const [entry, setEntry] = useState('');
    const [rating, setRating] = useState('');
         
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting")
        fetch('http://localhost:3001/review/create/', {
            method: 'POST',
            body: JSON.stringify({review: {reviewTitle: reviewTitle, nameOfMovie:nameOfMovie, entry:entry, rating:rating}}),
            headers: new Headers({
                'Content-Type': 'application/json', 
                "Authorization": props.token //add in bearer token
            })
        }).then((res) => res.json())
        .then((reviewData) => {
            console.log(reviewData);
            setRating('');
            setReviewTitle('');
            setNameOfMovie('');
            setEntry('');
            props.fetchReviews();
        })
    }     


return (
    <> 
        <h3>Create a Review!</h3>
        <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="rating"/>
                    <Input placeholder="Rating" style={{textAlign: "center"}} name="rating" type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="reviewTitle"/>
                    <Input placeholder="Review Title" style={{textAlign: "center"}} name="reviewTitle" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} /> 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="nameOfMovie"/>
                    <Input placeholder="Name of Movie" style={{textAlign: "center"}} name="nameOfMovie" value={nameOfMovie} onChange={(e) => setNameOfMovie(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="entry"/>
                    <Input placeholder="Review Entry" style={{textAlign: "center", height: "15vh"}} name="entry" value={entry} onChange={(e) => setEntry(e.target.value)} />
                </FormGroup>
                <br/>
                <Button color="danger"  type="submit">Click to Submit</Button> 
            </Form>
    </>
    
    )
}

export default ReviewCreate;