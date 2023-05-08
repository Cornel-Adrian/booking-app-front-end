import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function Register() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    function handleSubmit(){

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
                        label="Name"
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
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button sx={{ mx: 'auto', background: '#2c5d4f', marginTop: 4 }} type='submit' onClick={handleSubmit} variant="contained" size="medium">Register</Button>
                </div>
            </Box >
        </div >)
}


export default Register;
