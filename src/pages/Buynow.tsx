import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { Button } from '@mui/material';


type Service = {
    name: string;
    description: string;
    price: number;
}

function Buynow(props: Service) {

    const [date, setDate] = useState<string | null>(null);
    const fullDate: any = {};


    return (
        <Container maxWidth="xl">
            <Typography variant="h2" sx={{ my: "80px", fontFamily: 'serif' }}>{props.name}</Typography>
            <Typography variant="h4" sx={{ my: "40px", fontFamily: 'serif' }}>{props.description}</Typography>
            <Typography variant="h4" sx={{ my: "40px", fontFamily: 'serif' }}>{props.price}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} sx={{ display: 'block' }}>
                    <DatePicker disablePast label="Basic date picker" selectedSections="day" value={fullDate} onChange={(fullDate) => { setDate(fullDate['$d']); }} />
                </DemoContainer>
            </LocalizationProvider>
            <Button variant='contained' sx={{ my: '10px' }}> Buy now</Button>
        </Container>);
}


export default Buynow;