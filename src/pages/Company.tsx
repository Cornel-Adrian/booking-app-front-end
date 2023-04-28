import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import DenseTable from '../components/DenseTable';



function Company() {
    return(

        <Container maxWidth="xl">
            <Typography variant='h2' sx={{m: 10}}>Company Name</Typography>
            <Typography variant='body1'>Company Description</Typography>
            <DenseTable></DenseTable>
        </Container>
    );    
}


export default Company;