import { Container, Typography, Button, Box } from '@mui/material';
import BasicDatePicker from '../components/BasicDatePicker'

export default function Service() {
    return (
        <Container maxWidth="xl" sx={{ justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%' }}>
            <Box display={'flex'} sx={{ flexDirection: 'column' , alignItems: 'center', gap:'20px' }}>

                <Typography variant='h2'>Service Name</Typography>
                <Typography variant='h5'>Service Description</Typography>
                <BasicDatePicker />
                <Button sx={{ background: '#2c5d4f', maxWidth:'200px' }} variant="contained">Place Order</Button>
            </Box>
        </Container>
    );
}