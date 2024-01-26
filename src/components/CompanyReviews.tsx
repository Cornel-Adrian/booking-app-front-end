import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import React, { useState } from "react";
import Title from "./Title";

const rows: any[] = [];

interface Review {
    id: string;
    name: string;
    message: string;
    rating: number;
    createdAt: string;
}

export default function CompanyReviews() {

    const [reviews, setReviews] = useState<Review[]>([]);

    return (<React.Fragment>
        <Title>Cele mai recente Recenzii</Title>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Nume</TableCell>
                    <TableCell align="right">Rating</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {reviews ? reviews.map((row) => (
                    <TableRow >
                        <TableCell>{row.createdAt}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell align="right">{row.rating}</TableCell>
                    </TableRow>
                )) : (
                    <TableRow>
                        <Typography>Nici o recenzie deocamdata</Typography>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </React.Fragment>);
}