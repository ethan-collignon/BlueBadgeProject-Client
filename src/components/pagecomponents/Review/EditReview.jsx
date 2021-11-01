import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const ReviewEdit = (props) => {
    const [editReviewTitle, setEditReviewTitle] = useState('');
    const [editNameOfMovie, setEditNameOfMovie] = useState('');
    const [editEntry, setEditEntry] = useState('');
    const [editRating, setEditRating] = useState('');

    const reviewUpdate = (event, review) => { 
        event.preventDefault();
        fetch(`http://localhost:3001/review/update/${props.reviewToUpdate.id}`, { 
            method: 'PUT',
            body:JSON.stringify({review: {reviewTitle: editReviewTitle, nameOfMovie: editNameOfMovie, entry: editEntry, rating: editRating}}), //Appending an object to the body of the request with a form matching the input expected by our server
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': props.token //bearer token
            })
        }).then((res) => {
            props.fetchReviews(); 
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit a Review</ModalHeader>
            <ModalBody>
                <Form onSubmit={reviewUpdate}>
                    <FormGroup>
                        <Label htmlFor="reviewTitle">Edit Review Title:</Label>    
                        <Input name="reviewTitle" value={editReviewTitle} onChange={(e) => setEditReviewTitle(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nameOfMovie">Edit Name of Movie:</Label>    
                        <Input name="nameOfMovie" value={editNameOfMovie} onChange={(e) => setEditNameOfMovie(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="entry">Edit Entry:</Label>    
                        <Input name="entry" value={editEntry} onChange={(e) => setEditEntry(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="rating">Edit Rating:</Label>    
                        <Input name="rating" value={editRating} onChange={(e) => setEditRating(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update This Review</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ReviewEdit;