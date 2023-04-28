
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

export default function BasicDatePicker() {

    const [date, setDate] = useState(new Date());

    function handleChange(value: any) {
        setDate(value.$d);
    }

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{display:'block'}} components={['DatePicker']}>
                    <DatePicker disablePast={true} onChange={(newValue) => { handleChange(newValue) }} label="Controlled picker" />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    );
}