import CompanyCard from '../components/CompanyCard';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';

interface Company {
    id: string,
    companyName: string,
    companyDescription: string,
}


function Search() {

    const [page, setPage] = useState<number>(1);
    const itemsPerPage: number = 3;

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const cards: Company[] = [
        { id: "1", companyName: 'Card 1', companyDescription: 'This is the content of Card 1' },
        { id: "2", companyName: 'Card 2', companyDescription: 'This is the content of Card 2' },
        { id: "3", companyName: 'Card 3', companyDescription: 'This is the content of Card 3' },
        { id: "4", companyName: 'Card 4', companyDescription: 'This is the content of Card 4' },
        { id: "5", companyName: 'Card 5', companyDescription: 'This is the content of Card 5' },
        { id: "6", companyName: 'Card 6', companyDescription: 'This is the content of Card 6' },

    ];

    const startIndex: number = (page - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const paginatedCards: Company[] = cards.slice(startIndex, endIndex);


    return (
        <Container maxWidth="xl" sx={{ marginTop: "10px" }}>
            <TextField
                id="outlined-multiline-flexible"
                label="Search"
                multiline
                maxRows={4}
                sx={{ marginTop: "10px" }}
            />
            <Container maxWidth='lg' sx={{ marginTop: '1rem', mx: 'auto' }}>
                {paginatedCards.map((card) => (
                    <CompanyCard companyName={card.companyName} companyDescription={card.companyDescription} companyId={card.id} ></CompanyCard>
                ))}
                <Pagination
                    count={Math.ceil(cards.length / itemsPerPage)}
                    page={page}
                    onChange={handleChange}
                    sx={{display:'flex', justifyContent:'center'}}
                />

            </Container>
        </Container >
    );
}


export default Search;