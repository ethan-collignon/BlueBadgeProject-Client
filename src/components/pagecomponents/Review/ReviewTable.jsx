import React from 'react';
import { Table, Button } from 'reactstrap';

const ReviewTable = (props) => {
    const deleteReview = (review) => {
        fetch(`http://localhost:3001/review/${props.review.id}`, { 
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token 
            })
        })
        .then(() => props.fetchReviews()) 
    }

    const reviewMapper = () => {
        return props.reviews.map((review, user) => { 
            return( 
              <tr key={user}/*WOULD THIS BE REVIEW.USER.ID*/ >  
                <th scope="row">{review.id}</th>
                <td>{review.reviewTitle}</td>
                <td>{review.nameOfMovie}</td>
                <td>{review.entry}</td>
                <td>{review.rating}</td>
                <td>
                    <Button color="warning" onClick={() => {props.editUpdateReview(review); props.updateOn()}}>Update</Button> 
                    <Button color="danger" onClick={() => {deleteReview(review)}}>Delete</Button>
                </td>
              </tr>
            )
        })
    }

    return(
        <>
        <h3>Review History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Review Title</th>
                    <th>Name of Movie</th>    
                    <th>Entry</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {reviewMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default ReviewTable;