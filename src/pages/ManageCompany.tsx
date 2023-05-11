import { Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axiosClient from "../api/axiosInstance";

function ManageCompany() {

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
  const [companyId, setCompanyId] = useState<string>('');
  const { email } = JSON.parse(localStorage.getItem('_auth_state') || '');

  useEffect(() => {

    try {
      axiosClient.get('/company/findCompanyId/' + email).then((res) => {
        setCompanyId(res.data['companyId']);
      })

      axiosClient.get('/orders/findByCompanyId/' + companyId).then((res) => {
        setOrders(res.data)
      })

    } catch (err) {
      console.log(err);
    }


  }, [email])


  return (
    <Container maxWidth="xl">
      <TableContainer component={Paper} sx={{ marginTop: 5 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell>Desired Date</TableCell>

              <TableCell align='center'> Status</TableCell>
              <TableCell align='center'>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders ? orders.map((row: Order) => (
              <TableRow
                key={row.orderId}
              >
                <TableCell>{row.serviceName}</TableCell>
                <TableCell>{row.desiredDate.slice(0, 10)}</TableCell>
                <TableCell align='center'>
                  <Button>Accept</Button>
                  <Button>Complete</Button>
                  <Button>Cancel</Button>
                </TableCell>
                <TableCell align='center'>{row.price}</TableCell>

              </TableRow>
            )) : <></>}
          </TableBody>
        </Table>
      </TableContainer >

    </Container>);
}

export default ManageCompany