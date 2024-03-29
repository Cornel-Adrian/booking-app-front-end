import CompanyCard from '../components/CompanyCard';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import axiosClient from '../api/axiosInstance';

interface Company {
    id: number,
    name: string,
    description: string,
}


function Search() {

    const [page, setPage] = useState<number>(1);
    const itemsPerPage: number = 3;
    const [companies, setCompanies] = useState<Company[]>([]);
    const [search, setSearch] = useState<string | undefined>('');
    const getAll = async () => {
        axiosClient.get('/company/all/basic').then((res) => {
            setCompanies(res.data);
        }
        )
    }

    useEffect(() => {
        getAll();
    }, [])


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const startIndex: number = (page - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const paginatedCards: any[] = companies.slice(startIndex, endIndex);

    const submitSearch = () => {

        if (search === null || search === '') return getAll();

        axiosClient.get('company/find/' + search).then((res) => {
            setCompanies(res.data);
        })

    }
    return (
        <Container maxWidth="xl" sx={{ marginTop: "10px" }}>

            <TextField
                id="filled-flexible"
                label="Cauta"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                maxRows={4}
                sx={{ margin: '1rem' }}
            />
            <Button variant='outlined' onClick={submitSearch} type='submit' sx={{ margin: '1.5rem', color: 'gray' }}>
                Cauta
            </Button>
            <Container maxWidth='lg' sx={{ marginTop: '1rem', mx: 'auto' }}>
                {paginatedCards.map((card) => (
                    < CompanyCard key={card.companyId} companyName={card.name} companyDescription={card.description} id={card.id} ></CompanyCard>
                ))
                }
                <Pagination
                    count={Math.ceil(companies.length / itemsPerPage)}
                    page={page}
                    onChange={handleChange}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                />

            </Container>
        </Container >
    );
}


export default Search;