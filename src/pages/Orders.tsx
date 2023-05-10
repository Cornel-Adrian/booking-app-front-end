import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosInstance';


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


    useEffect(() => {
        axiosClient.get('/orders/email/' + email).then((res) => {
            setOrders(res.data);
        })

    }, [])



    return (
        <Container maxWidth="xl">
            <TableContainer component={Paper} sx={{ marginTop: 5 }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Service</TableCell>
                            <TableCell>Desired Date</TableCell>
                            <TableCell align='center'>Price</TableCell>
                            <TableCell align='right'> Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders ? orders.map((row: Order) => (
                            <TableRow
                                key={row.orderId}
                            >
                                <TableCell>{row.serviceName}</TableCell>
                                <TableCell>{row.desiredDate.slice(0,10)}</TableCell>
                                <TableCell align='center'>{row.price}</TableCell>
                                <TableCell align='right'>{row.status}</TableCell>
                            </TableRow>
                        )) : <div>Nothing purchased</div>}
                    </TableBody>
                </Table>
            </TableContainer >

        </Container>);
}


export default Orders;