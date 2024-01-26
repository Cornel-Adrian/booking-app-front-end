import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosInstance";


type ServiceProps = {
    name: string;
    description: string;
    price: number;
}


export default function ServiceCompanyTable({ companyId }: { companyId: string | undefined }) {

    const id = companyId;
    const navigate = useNavigate();
    const [services, setServices] = useState<ServiceProps[] | null>([]);

    const getData = (id: string | undefined) => {

        axiosClient.get("services/findByCompanyId/" + id).then((res) => {
            console.log(res);
            setServices(res.data);
        }).catch((err) => {
            if (err.response.status === 404) {
                setServices(null);
            }
        })
    }

    useEffect(() => {
        getData(id);
    }, [id, services]);




    return (
        <TableContainer component={Paper} sx={{ marginTop: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Table sx={{}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nume</TableCell>
                        <TableCell>Descriere</TableCell>
                        <TableCell align='center'>Pret</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services?.length ? (services.map((row: ServiceProps) => (
                        <TableRow sx={{ width: "50%" }}
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
                    ))) : <TableRow sx={{ display: 'block' }}><TableCell><Typography variant='h3' sx={{ mx: '10', textAlign: 'center' }}>Nici un serviciu disponibil</Typography></TableCell></TableRow>
                    }</TableBody>
            </Table>
        </TableContainer >
    )
}