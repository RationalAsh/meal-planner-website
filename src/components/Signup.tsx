import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Box, Button, Stack, TextField, Typography, Paper } from '@mui/material';
import { useSnackbar } from 'notistack';
// import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const { enqueueSnackbar } = useSnackbar();
    const auth = getAuth();
    // const navigate = useNavigate();

    // State to hold email and password
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    // Function to handle the form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        // Sign up with username and password with firebase auth.
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                enqueueSnackbar("User created successfully", { variant: 'success' });
                // navigate('/');
            })
            .catch((error) => {
                enqueueSnackbar(error.message, { variant: 'error' });
            });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
                padding: 2,
            }}
        >
            <Paper elevation={6} sx={{ padding: 4, maxWidth: 400, width: '100%' }}>
                <Stack spacing={3} component="form" onSubmit={handleSubmit}>
                    <Typography variant="h4" align="center">Sign Up</Typography>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" type="submit" fullWidth>Sign Up</Button>
                </Stack>
            </Paper>
        </Box>
    );
}