import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../api/axiosInstance';
import { Box } from '@mui/material';
import Chat from '../components/Chat';
import ReviewInput from '../components/ReviewInput';


function OrderStatus() {

    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');
    const [serviceName, setServiceName] = useState('');
    const { orderId } = useParams();

    useEffect(() => {


        try {
            axiosClient.get('/orders/get/' + orderId).then((res) => {
                setStatus(res.data[0]['status']);
                setServiceName(res.data[0]['serviceName']);
                setDate(res.data[0]['desiredDate'].slice(0, 10));
            })
        } catch (error) {

        }


    }, [orderId])


    switch (status) {

        case 'new': {
            return (
                <Container maxWidth="xl" sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant="h2" sx={{ my: "140px", fontFamily: 'serif' }}>Programare realizata</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Serviciu: {serviceName}</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Status: Programare plasata</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Data de livrare: {date}</Typography>
                    </Box>
                    <Chat></Chat>

                </Container>);
        }

        case 'accepted': {
            return (
                <Container maxWidth="xl" sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant="h2" sx={{ my: "140px", fontFamily: 'serif' }}>Programare realizata</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Serviciu: {serviceName}</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Status: In curs de procesare</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Data de livrare: {date}</Typography>
                    </Box>
                    <Chat></Chat>

                </Container>);
        }

        case 'done': {
            return (
                <Container maxWidth="xl" sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant="h2" sx={{ my: "140px", fontFamily: 'serif' }}>Programare realizata</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Serviciu: {serviceName}</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Status: Livrat</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Data de livrare: {date}</Typography>
                    </Box>
                    <ReviewInput />

                </Container>);
        }

        case 'canceled': {

            return (
                <Container maxWidth="xl" sx={{ justifyItems: 'center', justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant="h2" sx={{ my: "140px", fontFamily: 'serif' }}>Programare anulata</Typography>
                    </Box>
                </Container>);
        }


        default: {

            return (
                <Container maxWidth="xl" sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant="h2" sx={{ my: "140px", fontFamily: 'serif' }}>Programare realizata</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Id ordin: {orderId}</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Status: {status}</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'serif' }}>Data de livrare: {date}</Typography>
                    </Box>
                    <ReviewInput />

                </Container>);

        }

    }

}


export default OrderStatus;