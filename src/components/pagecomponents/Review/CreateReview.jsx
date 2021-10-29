import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "90%",
  },
  card: {
    minWidth: '15rem',
    maxWidth: "30vw",
    minHeight: "40vh",
    padding: "2%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    minWidth: "50%",
    padding: "2%",
  },
}));

const ReviewCreate = (props) => {
  const classes = useStyles();

  const [reviewTitle, setReviewTitle] = useState("");
  const [nameOfMovie, setNameOfMovie] = useState("");
  const [entry, setEntry] = useState("");
  const [rating, setRating] = useState(Number); //MIGHT NEED TO FIX
  
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newEntry = { reviewTitle: reviewTitle, nameOfMovie: nameOfMovie, entry: entry, rating: rating };
    console.log(newEntry);

    fetch('http://localhost:3001/review/create', {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
      body: JSON.stringify(newEntry),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          handleClose();
          setReviewTitle("");
          setNameOfMovie("");
          setEntry("");
          setRating("");
          alert("Review entry has been created!");
          handleClose();
          props.fetchReviews();
        } else {
          alert("Sorry. Something went wrong..");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        type="button"
        onClick={handleOpen}
      >
        New Entry
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.card}>
            <Container className={classes.container}>
              <TextField
                id="review-title"
                label="reviewTitle"
                multiline
                autoFocus
                variant="outlined"
                className={classes.input}
                placeholder="Title"
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
              />
              <br />
              <br />
              <TextField
                id="nameOfMovie"
                variant="outlined"
                type="nameOfMovie"
                className={classes.input}
                 placeholder="Name"
                value={nameOfMovie}
                onChange={(e) => setNameOfMovie(e.target.value.toString())}
              />
              <br />
              <br />
              <TextField
                id="review-entry"
                label="Entry"
                multiline
                rows={4}
                variant="outlined"
                className={classes.input}
                placeholder="Entry"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
              <br />
              <br />
              <TextField
                id="review-rating"
                label="Rating"
                multiline
                rows={4}
                variant="outlined"
                className={classes.input}
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
              <br />
              <br />
              <Button variant="outlined" color="primary" onClick={handleSubmit}>
                Submit Entry
              </Button>
            </Container>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
};
export default ReviewCreate;