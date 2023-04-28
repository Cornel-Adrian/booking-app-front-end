import CompanyCard from '../components/CompanyCard';
import './Search.css'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';


const Company = {
    id: "asdaf",
    companyName: "Company Name asdasfasf",
    companyDescription: "Description",
}




function Search() {


    return (
        <Container maxWidth="xl">
            <div className="search">
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Search"
                        multiline
                        maxRows={4}
                    />
                </div>
                <div className='search-results'>
                    <CompanyCard {...Company}></CompanyCard>
                    <CompanyCard {...Company}></CompanyCard>
                    <CompanyCard {...Company}></CompanyCard>
                    <CompanyCard {...Company}></CompanyCard>
                    <CompanyCard {...Company}></CompanyCard>
                    <CompanyCard {...Company}></CompanyCard>
                    <CompanyCard {...Company}></CompanyCard>
                    <CompanyCard {...Company}></CompanyCard>

                </div>
            </div>
        </Container>
    );
}


export default Search;