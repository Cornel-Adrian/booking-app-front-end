import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import { useEffect, useState } from 'react';
import axios from '../api/axios';


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {

        console.log("Ce plm")
        await axios.post("/auth/login", { 'email': email, 'password': password }).then((res) => {
            console.log(res.data.accessToken);
        }).catch((err) => {
            console.log("Error:" + err);
        });

    }

    useEffect(() => {


    }, [])



    return (
        <div className="login">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='inputs'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button sx={{ mx: 'auto', background: '#2c5d4f' }} onClick={handleLogin} variant="contained" size="medium">Login</Button>
                </div>
            </Box >
        </div >)
}


export default Login;
