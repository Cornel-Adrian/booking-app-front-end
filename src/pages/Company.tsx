import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RatingComp from '../components/RatingComp';
import TabelReviews from '../components/TabelReviews';
import ServiceCompanyTable from '../components/ServiceCompanyTable';


function Company() {

    const location = useLocation();

    interface companyInterface {
        id: string
        companyName: string;
        companyDescription: string;
    }


    const { id } = useParams();
    const [company, setCompany] = useState<companyInterface>({ id: '', companyName: '', companyDescription: '' });




    useEffect(() => {

        console.log("Click 2");
        setCompany(location.state);
        return
    }, [id]);


    return (

        <Container maxWidth="xl">
            <Typography variant='h2' sx={{ m: 10 }}>{company?.companyName}</Typography>
            <Typography variant='body1'>{company?.companyDescription}</Typography>
            <RatingComp companyId={company.id}></RatingComp>
            <Container maxWidth="xl">
                <ServiceCompanyTable companyId={id} />
                <TabelReviews companyId={id}></TabelReviews>
            </Container>
        </Container>
    );
}


export default Company;