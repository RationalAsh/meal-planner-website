import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import { Card, CardContent, Container, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

type Props = {}

export default function HomePage({}: Props) {
    // State to hold the response from the API.
    const [response, setResponse] = React.useState<any>(null);

    // Use the useEffect hook to call the API when the component mounts.
    // React.useEffect(() => {
    //     // fetch data using axios
    //     axios.get(`${API_URL}/test`).then((response) => {
    //         console.log(response.data);
    //         setResponse(response.data);
    //     })
        
    // }, []);

  return (
    <>        
    <ResponsiveAppBar />
    <Container maxWidth="xl" sx={{mt: 2}}>
    <Stack spacing={3}>
        <LinkCard title="View Plan" Text="View your meal plans" />
        <LinkCard title="Plan a Meal" Text="Plan a meal for a day" />
        <LinkCard title="Pantry" Text="View / Update what's in your pantry" />
        <LinkCard title="Tedst" Text="Test" />
    </Stack>
    </Container>
    </>
  )
}

type CardProps = {
    title: string,
    Text: string,
}

export function LinkCard(props: CardProps) {
    // State to hold the mouse down state
    const [mouseDown, setMouseDown] = React.useState(false);

    // Function to handle the mouse down event
    const mouseDownHandler = (event: React.MouseEvent) => {
        console.log("Mouse down")
        setMouseDown(true)
    }

    // Function to handle the mouse up event
    const mouseUpHandler = (event: React.MouseEvent) => {
        console.log("Mouse up")
        setMouseDown(false)
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