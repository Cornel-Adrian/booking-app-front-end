import { Box, List, ListItem, ListItemText, Rating, Typography } from "@mui/material";
import axiosClient from "../api/axiosInstance";
import { useEffect, useState } from "react";

interface Review {
    id: string;
    name: string;
    message: string;
    rating: number;
}

function TabelReviews({ companyId }: { companyId: string | undefined }) {

    const id = companyId;
    const [reviews, setReviews] = useState<Review[] | null>([]);

    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: '#92a8d1',
        m: 1,
        border: 1,
        borderRadius: '16px'
    };

    useEffect(() => {

        if (id !== undefined) {
            axiosClient.get("reviews/findByCompanyId/" + id).then((res) => {
                setReviews(res.data);
            }).catch((err)=>{
                if(err.response.status === 404)
                {
                    setReviews(null);
                }
            })
        }

        return;
    }, [id, reviews]);

    return (
        <Box sx={{ marginTop: "50px", alignSelf: 'center' }}>
            <Typography variant="h4">Recenzii</Typography>
            <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", overflow: 'scroll', height: '200px', ...commonStyles, }}>
                {reviews ? reviews.map((review) => (
                    <ListItem key={review.id + "_"} sx={{ display: 'inline-block' }}>
                        <Box textAlign="left">
                            <ListItemText key={review.id} primary={review.name}
                                sx={{ m: "20px", mx: 'auto' }}
                            >
                            </ListItemText>
                        </Box>
                        <Box>
                            <Typography variant="body2">{review.message}</Typography>
                            <Rating sx={{ m: 2 }} name="read-only" value={review.rating} readOnly />
                        </Box>
                    </ListItem>
                )) : <p>Nu exista recenzii deocamdata</p>}
            </List>
        </Box >
    )
}

export default TabelReviews