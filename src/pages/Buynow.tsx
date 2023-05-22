import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../api/axiosInstance';




function Buynow() {

    const [date, setDate] = useState<string | null>(null);
    const fullDate: any = {};
    const { name } = useParams();
    const { description } = useParams();
    const { price } = useParams();
    const { companyId } = useParams();
    const { email } = JSON.parse(localStorage.getItem('_auth_state') || '');
    const navigate = useNavigate();

    const Service = {
        name: name,
        description: description,
        price: price,
        date: date
    }

    if (Service === undefined) {
        return <div>Please use a select a service</div>
    }

    const handleSubmit = () => {
        try {
            axiosClient.post('orders/create', { 'userEmail': email, 'companyId': companyId, 'serviceName': name, 'desiredDate': date, 'price': price })
                .then((res) => {
                    navigate('/order/' + res.data['orderId']);
                })
        } catch (err) {
            console.log('Error' + err);
        }
    }

    return (
        <Container maxWidth="xl">
            <Typography variant="h2" sx={{ my: "80px", fontFamily: 'serif' }}>{Service.name}</Typography>
            <Typography variant="h4" sx={{ my: "40px", fontFamily: 'serif' }}>{Service.description}</Typography>
            <Typography variant="h4" sx={{ my: "40px", fontFamily: 'serif' }}>{Service.price}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} sx={{ display: 'block' }}>
                    <DatePicker disablePast selectedSections="day" value={fullDate} onChange={(fullDate) => { setDate(fullDate['$d']); }} />
                </DemoContainer>
            </LocalizationProvider>
            <Button variant='contained' sx={{ my: '10px' }} onClick={handleSubmit}>Rezerva</Button>
        </Container>);
}


export default Buynow;