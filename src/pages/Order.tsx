import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../api/axiosInstance';


function OrderStatus() {

    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');


    const { orderId } = useParams();

    useEffect(() => {


        try {
            axiosClient.get('/orders/get/' + orderId).then((res) => {
                setStatus(res.data[0]['status']);
                setDate(res.data[0]['desiredDate'].slice(0,10));
            })
        } catch (error) {

        }


    }, [])




    return (
        <Container maxWidth="xl">

            <Typography variant="h2" sx={{ my: "140px", fontFamily: 'serif' }}>Thank you for your purchase</Typography>
            <Typography variant="h5" sx={{ fontFamily: 'serif' }}>OrderId: {orderId}</Typography>
            <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Status: {status}</Typography>
            <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Delivery Date: {date}</Typography>

        </Container>);
}


export default OrderStatus;