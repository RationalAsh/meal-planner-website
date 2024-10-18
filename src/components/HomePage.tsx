import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import { Card, CardContent, Container, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { get_test } from '../api/apicalls';

const API_URL = 'https://192.168.29.188:3000/api/v1';

type Props = {}

export default function HomePage({}: Props) {
    // State to hold the response from the API.
    const [response, setResponse] = React.useState<any>("");

    // Use the useEffect hook to call the API when the component mounts.
    React.useEffect(() => {
        // fetch data using axios
        get_test().then((data) => {
            // log the data
            console.log(data)
            // Convert the data to a string and set the response state.
            setResponse(JSON.stringify(data))
        })
        
    }, []);

  return (
    <>      
    <Container maxWidth="xl" sx={{mt: 2}}>
    <Stack spacing={3}>
        <LinkCard title="View Plan" Text="View your meal plans" link="/" />
        <LinkCard title="Plan a Meal" Text="Plan a meal for a day" link="/plan-meal" />
        <LinkCard title="Pantry" Text="View / Update what's in your pantry" link="/" />
        <LinkCard title="Tedst" Text={response.toString()} link="/" />
    </Stack>
    </Container>
    </>
  )
}

type CardProps = {
    title: string,
    Text: string,
    link: string
}

export function LinkCard(props: CardProps) {
    // State to hold the mouse down state
    const [mouseDown, setMouseDown] = React.useState(false);

    // Handle to navigate
    const navigate = useNavigate();

    // Function to handle the mouse down event
    const mouseDownHandler = (event: React.MouseEvent) => {
        console.log("Mouse down")
        setMouseDown(true)
    }

    // Function to handle the mouse up event
    const mouseUpHandler = (event: React.MouseEvent) => {
        console.log("Mouse up")
        setMouseDown(false)
        navigate(props.link)
    }

    // Handle the touch start event
    const touchStartHandler = (event: React.TouchEvent) => {
        console.log("Touch start")
        setMouseDown(true)
    }

    // Handle the touch end event
    const touchEndHandler = (event: React.TouchEvent) => {
        console.log("Touch end")
        setMouseDown(false)
        navigate(props.link)
    }
    
  return (
    <div onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} onTouchStart={touchStartHandler} onTouchEnd={touchEndHandler}>
    <Card elevation={mouseDown ? 2 : 10} sx={{ display: 'flex' }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {props.Text}
            </Typography>
        </CardContent>
    </Card>
    </div>
  )
}