import { Box, Container, List, ListItem, ListItemText, Rating, Typography } from "@mui/material";
import axiosClient from "../api/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


interface Review {
    reviewId: string;
    name: string;
    message: string;
    rating: number;
}

function TabelReviews() {

    const [reviews, setReviews] = useState<Review[]>([]);
    const { companyId } = useParams();

    useEffect(() => {
        axiosClient.get("reviews/findByCompanyId/" + companyId).then((res) => {
            setReviews(res.data);
        })

        return;
    }
        , [companyId, reviews]);



    //<Rating sx={{ m: 2 }} name="read-only" value={value} readOnly />

    return (
        <Container sx={{ marginTop: "50px" }}>
            <Typography variant="h4">Review-uri</Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-evenly" }}>
                {reviews ? reviews.map((review) => (
                    <Box sx={{alignSelf:'center'}}>
                        <ListItem sx={{display:'block'}}>
                            <Box textAlign="left">
                                <ListItemText key={review.reviewId} primary={review.name}
                                    sx={{ m: "20px", mx: 'auto' }}
                                >
                                </ListItemText>
                            </Box>
                            <Box>
                                <Typography variant="body2">{review.message}</Typography>
                                <Rating sx={{ m: 2 }} name="read-only" value={review.rating} readOnly />
                            </Box>
                        </ListItem>
                    </Box>
                )) : <p>Nu exista Reviewuri deocamdata</p>}
            </List>
        </Container >
    )
}

export default TabelReviews