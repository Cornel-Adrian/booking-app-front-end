import { Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
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
  const { email } = JSON.parse(localStorage.getItem('_auth_state') || '');


  const getCompanyOrders = useCallback(async () => {
    await axiosClient.get('/orders/findByCompanyEmail/' + email).then((res) => {
      setOrders(res.data)
    })
  }, [email])


  const acceptOrder = (async (id: string) => {
    await axiosClient.patch('/orders/accept/' + id);
    getCompanyOrders()
  })

  const completeOrder = (async (id: string) => {
    await axiosClient.patch('/orders/complete/' + id);
    getCompanyOrders()
  })

  const cancelOrder = (async (id: string) => {
    await axiosClient.patch('/orders/cancel/' + id);
    getCompanyOrders()
  })


  useEffect(() => {
    try {
      getCompanyOrders();
    } catch (err) {
      console.log(err);
    }
    return;
  }, [getCompanyOrders])


  return (
    <Container maxWidth="xl">
      <TableContainer component={Paper} sx={{ marginTop: 5 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell>Desired Date</TableCell>

              <TableCell align='center'> Update</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Status</TableCell>
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
                  <Button onClick={() => { acceptOrder(row.orderId) }} disabled={['accepted', 'done', 'canceled'].includes(row.status)}>Accept</Button>
                  <Button onClick={() => { completeOrder(row.orderId) }} disabled={['done', 'canceled', 'new'].includes(row.status)}>Complete</Button>
                  <Button onClick={() => { cancelOrder(row.orderId) }} disabled={['canceled', 'done'].includes(row.status)}>Cancel</Button>
                </TableCell>
                <TableCell align='center'>{row.price}</TableCell>
                <TableCell align='center'>{row.status}</TableCell>
              </TableRow>
            )) : <></>}
          </TableBody>
        </Table>
      </TableContainer >

    </Container>);
}

export default ManageCompany