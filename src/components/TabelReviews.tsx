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

    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: '#92a8d1',
        m: 1,
        border: 1,
        borderRadius: '16px'
    };

    useEffect(() => {
        axiosClient.get("reviews/findByCompanyId/" + companyId).then((res) => {
            setReviews(res.data);
        })

        return;
    }
        , [companyId, reviews]);

    return (
        <Box sx={{ marginTop: "50px", alignSelf:'center' }}>
            <Typography variant="h4">Review-uri</Typography>
            <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", overflow: 'scroll', height: '200px',...commonStyles, }}>
                {reviews ? reviews.map((review) => (
                        <ListItem key={review.reviewId + "_"} sx={{ display: 'inline-block' }}>
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
                )) : <p>Nu exista Reviewuri deocamdata</p>}
            </List>
        </Box >
    )
}

export default TabelReviews