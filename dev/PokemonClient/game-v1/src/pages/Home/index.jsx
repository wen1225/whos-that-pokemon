import * as React from 'react';
import "./styles.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GameBoyImage from '../../assets/images/gameboy.png';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';


function Home() {
    return (
        <>
            <Box sx={{ position: 'absolute', top: '5%', bottom: '10%', left: '5%', right: '5%', m: 0, p: 0, bgcolor: '#DCDBE7', height: '90%', width: '90%', boxShadow: 10 }} />
            <Box sx={{ position: 'relative' }}>
                <Grid container spacing={2}>
                    <Box component="img" src={GameBoyImage} />
                    <Grid container spacing={3} sx={{ position: 'absolute' }}>
                        <Grid container item xs={12} justifyContent='center'><Link to='single' component="button" style={{ textDecoration: 'none', }}>SinglePlayer</Link></Grid>
                        <Grid container item xs={12} justifyContent='center'><Link to='multi' component="button" style={{ textDecoration: 'none' }}>MultiPlayer</Link></Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Home;