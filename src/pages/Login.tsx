import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import { useEffect, useState } from 'react';
import { useUserLogin } from '../hooks/useUserLogin';
import { useSignIn } from 'react-auth-kit';


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { data, isLoading, mutate: login, isSuccess, isError } = useUserLogin();
    const signIn = useSignIn();

    useEffect(() => {
        if (isSuccess) {
            console.log('Login success');
            if (signIn(
                {
                    token: data.auth_token,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                    authState: { email: email, role: data.role },
                    refreshToken: data.refresh_token,
                    refreshTokenExpireIn: 3600
                }
            )) { console.log('Login success') }
        } else if (isError) {
            console.log('Login success');
        } else return;
    }, [isSuccess, isError]);

    const handleSubmit = () => {
        login({ email, password }); // Login api call
    };



    if (isLoading) <div>Loading...</div>;


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
