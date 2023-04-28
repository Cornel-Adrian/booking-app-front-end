import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';


function Login() {
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
                        defaultValue="Email"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Button sx={{mx:'auto'}} variant="contained" size="medium">Login</Button>
                </div>
            </Box >
        </div >)
}


export default Login;
