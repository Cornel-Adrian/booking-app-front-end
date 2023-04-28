import { Container, Typography, Button, Box } from '@mui/material';
import BasicDatePicker from '../components/BasicDatePicker'

export default function Service() {
    return (
        <Container maxWidth="xl" sx={{ justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
            <Box display={'block'}>

                <Typography>Service Name</Typography>
                <Typography>Service Description</Typography>
                <BasicDatePicker></BasicDatePicker>
                <Button sx={{ background: '#2c5d4f' }} variant="contained">Place Order</Button>
            </Box>
        </Container>
    );
}