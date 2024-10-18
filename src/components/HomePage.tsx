import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import { Card, CardContent, Container, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <>        
    <ResponsiveAppBar />
    <Container maxWidth="xl" sx={{mt: 2}}>
    <Stack spacing={3}>
        <LinkCard title="View Plan" Text="View your meal plans" />
        <LinkCard title="Plan a Meal" Text="Plan tomorrow's meal" />
        <LinkCard title="Update Pantry" Text="Update what's in your pantry" />
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
  return (
    <Card sx={{ display: 'flex' }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {props.Text}
            </Typography>
        </CardContent>
    </Card>
  )
}