import { Box, Card } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

export default function Profile() {

    const { currentUser } = useContext(AppContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.name);
            setEmail(currentUser.email);
            setCreatedAt(currentUser.createdAt.slice(0, 10));
        }
    }, [])

    const theme = { mt: 20, p: 2, mb: 2 }


    return (
        <div>
            <Card sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Card sx={theme}>
                    <PersonOutlineIcon sx={{ mx: 'auto', mt:2, alignSelf: 'center' }} />
                </Card>
                <Box>
                    <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div>Nume: {name}</div>
                    <div>Email: {email}</div>
                    <div>De cand esti pe site: {createdAt}</div>
            </Card>
        </Box>
            </Card >
        <Box sx={{ mt: 20, mx: 20 }}>
            <Card square={true} sx={{}}>
                <div>Review-uri lasate:</div>
                <div>Comenzi plasate:</div>
            </Card>
        </Box>


        </div >)
}