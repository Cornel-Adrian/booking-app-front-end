import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import axiosClient from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = useSignIn();
    let navigate = useNavigate();

    const handleSubmit = () => {

        try {
            axiosClient.post('auth/login', { 'email': email, 'password': password }).then((res) => {

                if (signIn(
                    {
                        token: res.data.accessToken,
                        expiresIn: 3600,
                        tokenType: "Bearer",
                        authState: { email: email, role: res.data.role },
                        //refreshToken: res.data.refreshToken,
                        //refreshTokenExpireIn: 3600
                    }
                )) { navigate('/Search') }
            })
        } catch (err) {
            console.log("Error: ", err);
        }

    };





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
                        label="Parola"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button sx={{ mx: 'auto', background: '#2c5d4f' }} onClick={handleSubmit} variant="contained" size="medium">Logare</Button>
                </div>
            </Box >
        </div >)
}


export default Login;
