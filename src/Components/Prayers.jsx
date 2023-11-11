import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaCard({name, time, image}) {
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="Fajr Prayer"
                
            />

            <CardContent>
                <h1>
                {name}   
                </h1>
                <Typography variant="h2" color="text.secondary">
                    {time}
                </Typography>
            </CardContent>

            
        </Card>
    );
}
