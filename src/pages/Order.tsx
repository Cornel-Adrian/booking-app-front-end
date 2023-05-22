import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../api/axiosInstance';
import { Box } from '@mui/material';
import Chat from '../components/Chat';


function OrderStatus() {

    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');
    const { orderId } = useParams();

    useEffect(() => {


        try {
            axiosClient.get('/orders/get/' + orderId).then((res) => {
                setStatus(res.data[0]['status']);
                setDate(res.data[0]['desiredDate'].slice(0, 10));
            })
        } catch (error) {

        }


    }, [])




    return (
        <Container maxWidth="xl" sx={{ display: 'flex', justifyItems:'center', justifyContent:'space-around'}}>
            <Box>
                <Typography variant="h2" sx={{ my: "140px", fontFamily: 'serif' }}>Programare realizata</Typography>
                <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Id ordin: {orderId}</Typography>
                <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Status: {status}</Typography>
                <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Data de livrare: {date}</Typography>
            </Box>
            <Chat></Chat>

        </Container>);
}


export default OrderStatus;