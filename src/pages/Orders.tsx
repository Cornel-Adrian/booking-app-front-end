import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom'


function Orders() {

    type Order = {
        orderId: string;
        userId: string;
        companyId: string;
        status: string;
        serviceName: string;
        desiredDate: string;
        price: number;
    }

    const [orders, setOrders] = useState([]);
    const { email } = JSON.parse(localStorage.getItem('_auth_state') || '');
    const navigate = useNavigate();


    useEffect(() => {
        axiosClient.get('/orders/email/' + email).then((res) => {
            setOrders(res.data);
        })

    }, [email])



    return (
        <Container maxWidth="xl">
            <TableContainer component={Paper} sx={{ marginTop: 5 }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Serviciu</TableCell>
                            <TableCell>Data livrare</TableCell>
                            <TableCell align='center'>Pret</TableCell>
                            <TableCell align='right'> Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders ? orders.map((row: Order) => (
                            <TableRow
                                key={row.orderId}
                                onClick={() => { navigate('/order/' + row.orderId) }}
                                hover={true}
                            >
                                <TableCell>{row.serviceName}</TableCell>
                                <TableCell>{row.desiredDate.slice(0, 10)}</TableCell>
                                <TableCell align='center'>{row.price}</TableCell>
                                <TableCell align='right'>{row.status}</TableCell>
                            </TableRow>
                        )) : <></>}
                    </TableBody>
                </Table>
            </TableContainer >

        </Container>);
}


export default Orders;