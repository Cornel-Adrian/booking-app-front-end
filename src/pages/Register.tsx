import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axiosClient from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';


function Register() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();


    function handleSubmit(){
        try {
            axiosClient.post('user/create', {'name': name, 'email': email, 'password':password}).then(()=>{
                navigate('/login');
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="register">
            <Box
                component="form"
                sx={{
                    marginTop: "150px",
                    '& .MuiTextField-root': { m: 1, width: '25ch', marginTop: 5, mx: 'auto' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='inputs'>
                    <TextField
                        required
                        label="Nume"
                        autoComplete='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        required
                        label="Email"
                        autoComplete='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Parola"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button sx={{ mx: 'auto', background: '#2c5d4f', marginTop: 4 }} type='submit' onClick={handleSubmit} variant="contained" size="medium">Inregistrare</Button>
                </div>
            </Box >
        </div >)
}


export default Register;
