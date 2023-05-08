import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { List, ListItem } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './styles.module.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#392939',
        },
        secondary: {
            main: '#B39DDB',
        }
    },
});

function SP_Rules() {
    const navigate = useNavigate();
    const [progress, setProgress] = React.useState(0);
    const [isReady, setIsReady] = React.useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    setIsReady(true);
                    return 100;
                }
                const randNum = Math.random() * 10;
                return Math.min(oldProgress + randNum, 100);
            });
        }, 500);
    }, []);

    function handleClick() {
        return (() => {
            if (isReady) {
                setTimeout(() => {
                    navigate('/single');
                }, .1);
            }
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ position: 'absolute', top: '5%', bottom: '10%', left: '5%', justifyContent: 'center', alignItems: 'center', m: 0, p: 0, bgcolor: '#DCDBE7', height: '90%', width: '90%', boxShadow: 10 }} />
            <Box sx={{ position: 'relative', width: '45vw', height: '10vh', top: '-20vh', display: 'grid', justifyItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3" sx={{ textAlign: 'center', fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, fontFamily: 'PokemonGB' }}>How to Play</Typography>
                <List>
                    <ListItem sx={{ fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' } }}>1. Make sure you're not muted</ListItem>
                    <ListItem sx={{ fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' } }}>2. Listen carefully when the round starts</ListItem>
                    <ListItem sx={{ fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' } }}>3. Guess!</ListItem>
                    <ListItem sx={{ fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' } }}>Tip: Use hints if you're stuck!</ListItem>
                </List>
                <LinearProgress variant='determinate' value={progress} color='primary' sx={{ m: '5vh', width: '100%', bgcolor: '#D5ACCD' }} />
                <Button onClick={handleClick()} variant='contained' color='secondary' sx={{width: '40%' }}><Typography sx={{ fontFamily: 'PokemonGB', color: 'black' }}>Start</Typography></Button>
            </Box>
        </ThemeProvider>
    );

}

export default SP_Rules;