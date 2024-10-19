import React from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

type Props = {}

export default function Signup({}: Props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const auth = getAuth();

    // State to hold email
    const [email, setEmail] = React.useState("");
    // State to hold password
    const [password, setPassword] = React.useState("");

    // Function to handle the form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);

        // Sign up with username and password with firebase auth.
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User: ", user);
                enqueueSnackbar("User created successfully", { variant: 'success' });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Code: ", errorCode);
                console.log("Error Message: ", errorMessage);
                enqueueSnackbar(errorMessage, { variant: 'error'});
            });
    }

  return (
    <Stack spacing={3} component="form" sx={{mt: 3}}>
        <Typography variant="h4" sx={{display:'flex', justifyContent: 'center'}}>Sign Up</Typography>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h6" sx={{margin: 2}}>Email</Typography>
            <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            onChange={(e) => setEmail(e.target.value)}
            />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            
            <Typography variant="h6" sx={{margin: 2}}>Password</Typography>

            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button variant="contained" onClick={handleSubmit}>Sign Up</Button>
        </Box>
    </Stack>
  )
}