// import React, {useState} from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// const CreateReview = (props) => {
//     const [reviewTitle, setReviewTitle] = useState('');
//     const [nameOfMovie, setNameOfMovie] = useState('');
//     const [entry, setEntry] = useState('');
//     const [rating, setRating] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:3001/review/create/', {
//             method: 'POST',
//             body: JSON.stringify({review: {reviewTitle: reviewTitle, nameOfMovie: nameOfMovie, entry: entry, rating: rating}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         }).then((res) => res.json())
//         .then((reviewData) => {
//             console.log(reviewData);
//             setReviewTitle('');
//             setNameOfMovie('');
//             setEntry('');
//             setRating('');
//             props.fetchReviews();
//         })
//     }
//     return(
//         <>
//             <h3>Create a Review</h3>
//             <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor="reviewTitle"/>
//                     <Input name="reviewTitle" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)}/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="nameOfMovie"/>
//                     <Input type="nameOfMovie" name="nameOfMovie" value={nameOfMovie} onChange={(e) => setNameOfMovie(e.target.value)}/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="entry"/>
//                     <Input name="entry" value={entry} onChange={(e) => setEntry(e.target.value)}/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="rating"/>
//                     <Input name="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
//                 </FormGroup>
//                 <br/>
//                 <Button type="submit">Click to Submit</Button>
//             </Form>
//         </>
//     )
// }
// export default CreateReview;