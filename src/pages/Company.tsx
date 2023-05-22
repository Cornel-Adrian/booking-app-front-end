import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import axiosClient from '../api/axiosInstance';
import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RatingComp from '../components/RatingComp';



function Company() {

    type ServiceProps = {
        name: string;
        description: string;
        price: number;
    }



    interface companyInterface {
        companyId: string;
        name: string;
        email: string;
        description: string;
        services: ServiceProps[];
    }


    const { companyId } = useParams();
    const [company, setCompany] = useState<companyInterface>();
    let companyService = company?.services;
    const navigate = useNavigate();


    useEffect(() => {
        try {
            axiosClient.get('company/' + companyId).then((res) => {
                setCompany(res.data);
            })
        } catch (err) {

        }

        return
    }, [companyId])

    return (

        <Container maxWidth="xl">
            <Typography variant='h2' sx={{ m: 10 }}>{company?.name}</Typography>
            <Typography variant='body1'>{company?.description}</Typography>
            <RatingComp companyId={companyId}></RatingComp>
            <Container maxWidth="xl">
                <TableContainer component={Paper} sx={{ marginTop: 5 }}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nume</TableCell>
                                <TableCell>Descriere</TableCell>
                                <TableCell align='center'>Pret</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {companyService ? companyService.map((row: ServiceProps) => (
                                <TableRow
                                    key={row.name}
                                >
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell align='center'>{row.price}</TableCell>
                                    <TableCell align='right'>
                                        <Button sx={{ background: '#2c5d4f' }} variant="contained" onClick={() => {
                                            navigate('buynow/' + row.name + '/' + row.description + '/' + row.price);
                                        }}>Programeaza</Button>
                                    </TableCell>
                                </TableRow>
                            )) : <TableRow sx={{ display: 'block' }}><TableCell><Typography variant='h3' sx={{ mx: '10', textAlign: 'center' }}>Nici un serviciu disponibil</Typography></TableCell></TableRow>
                            }</TableBody>
                    </Table>
                </TableContainer >
            </Container>
        </Container>
    );
}


export default Company;