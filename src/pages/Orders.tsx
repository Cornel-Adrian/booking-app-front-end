import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Container from '@mui/material/Container';


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

    let companyService: Order[] = [];

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
                        {companyService ? companyService.map((row: Order) => (
                            <TableRow
                                key={row.orderId}
                            >
                                <TableCell>{row.serviceName}</TableCell>
                                <TableCell>{row.desiredDate}</TableCell>
                                <TableCell align='center'>{row.price}</TableCell>
                                <TableCell align='right'></TableCell>
                            </TableRow>
                        )) : <div>Nothing purchased</div>}
                    </TableBody>
                </Table>
            </TableContainer >

        </Container>);
}


export default Orders;