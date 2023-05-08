import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import { useEffect, useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import axiosClient from '../api/axiosInstance';


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = useSignIn();

    useEffect(() => {

    }, []);

    const handleSubmit = () => {
        //login({ email, password }); // Login api call

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
                )) { console.log('Success'); }
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
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button sx={{ mx: 'auto', background: '#2c5d4f' }} onClick={handleSubmit} variant="contained" size="medium">Login</Button>
                </div>
            </Box >
        </div >)
}


export default Login;
