import CompanyCard from '../components/CompanyCard';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import axiosClient from '../api/axiosInstance';

interface Company {
    companyId: string,
    name: string,
    description: string,
}


function Search() {

    const [page, setPage] = useState<number>(1);
    const itemsPerPage: number = 3;
    const [companies, setCompanies] = useState<Company[]>([]);
    const [search, setSearch] = useState<string | undefined>();

    useEffect(() => {
        try {
            axiosClient.get('/company/all/basic').then((res) => res).then(data => {
                console.log(data.data);
                setCompanies(data.data);

            })

        } catch (err) {
            console.log(err);
        }
    }, [])


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const cards: Company[] = [
        { companyId: "1", name: 'Card 1', description: 'This is the content of Card 1' },
        { companyId: "2", name: 'Card 2', description: 'This is the content of Card 2' },
        { companyId: "3", name: 'Card 3', description: 'This is the content of Card 3' },
        { companyId: "4", name: 'Card 4', description: 'This is the content of Card 4' },
        { companyId: "5", name: 'Card 5', description: 'This is the content of Card 5' },
        { companyId: "6", name: 'Card 6', description: 'This is the content of Card 6' },

    ];

    const startIndex: number = (page - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const paginatedCards: Company[] = companies.slice(startIndex, endIndex);

    const submitSearch = () => {
        console.log(search);
    }


    



    return (
        <Container maxWidth="xl" sx={{ marginTop: "10px" }}>

            <TextField
                id="filled-flexible"
                label="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                maxRows={4}
                sx={{ margin: '1rem' }}
            />
            <Button variant='outlined' onClick={submitSearch} type='submit' sx={{ margin: '1.5rem', color: 'gray' }}>
                Search
            </Button>
            <Container maxWidth='lg' sx={{ marginTop: '1rem', mx: 'auto' }}>
                {paginatedCards.map((card) => (
                    <CompanyCard key={card.companyId} companyName={card.name} companyDescription={card.description} companyId={card.companyId} ></CompanyCard>
                ))}
                <Pagination
                    count={Math.ceil(cards.length / itemsPerPage)}
                    page={page}
                    onChange={handleChange}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                />

            </Container>
        </Container >
    );
}


export default Search;