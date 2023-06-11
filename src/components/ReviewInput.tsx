import React, { useEffect, useState } from "react";
import { TextField, Typography, Button, Box, Rating, Container } from "@mui/material";
import axiosClient from "../api/axiosInstance";
import { useNavigate, useParams } from 'react-router-dom';

interface Review {
  name: string;
  rating: number | null;
  message: string;
  orderId: string | undefined;
}

const ReviewInput: React.FC = () => {
  const [review, setReview] = useState<Review>({
    name: "",
    rating: 1,
    message: "",
    orderId: "",
  });

  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setReview(prevReview => ({
      ...prevReview,
      orderId: orderId
    }));
    return
  }, [orderId, review])



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReview(prevReview => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleRatingChange = (newValue: number | null) => {
    setReview(prevReview => ({
      ...prevReview,
      rating: newValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Do something with the review data
    try {
      axiosClient.post('/reviews/create', review).then(() => {
        navigate('/orders');

      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth='sm' sx={{ mt: '150px' }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Lasa un review</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Titlu"
            name="name"
            value={review.name}
            onChange={handleChange}
            required
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="rating"
            value={review.rating}
            onChange={(event, newValue) => {
              handleRatingChange(newValue);
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Text"
            name="message"
            value={review.message}
            onChange={handleChange}
            required
            multiline
            fullWidth
            minRows={3}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Trimte review
        </Button>
      </form>
    </Container>
  );
};

export default ReviewInput;
