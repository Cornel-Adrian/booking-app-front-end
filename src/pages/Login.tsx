import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import { useContext, useEffect, useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import axiosClient from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { useIsAuthenticated } from 'react-auth-kit';


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = useSignIn();
    let navigate = useNavigate();
    const { setCurrentUser, setCurrentRole } = useContext(AppContext);
    const isAuthenticated = useIsAuthenticated();

    useEffect(()=>{
        if(isAuthenticated()) navigate('/Search');
    },[])

    const handleSubmit = async () => {

        try {
            await axiosClient.post('auth/login', { 'email': email, 'password': password }).then((res) => {

                if (signIn(
                    {
                        token: res.data.accessToken,
                        expiresIn: 3600,
                        tokenType: "Bearer",
                        authState: { email: email },
                        //refreshToken: res.data.refreshToken,
                        //refreshTokenExpireIn: 3600
                    }
                )) {
                    console.log("res data is", res.data);
                    setCurrentRole(res.data.role);
                    setCurrentUser({
                        name: res.data.name,
                        createdAt: res.data.createdAt,
                        role: res.data.role,
                        email: email,
                    });
                    navigate('/Search')
                }
            })
        } catch (err: any) {
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
                    <Button sx={{ mx: 'auto', background: '#2c5d4f', mt: "10px" }} onClick={() => { navigate('/register') }} variant="contained" size="medium">Inregistreazate</Button>
                </div>
            </Box >
        </div >)
}


export default Login;
