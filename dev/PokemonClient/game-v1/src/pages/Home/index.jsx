import * as React from 'react';
import "./styles.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GameBoyImage from '../../assets/images/gameboy.png';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';


function Home() {
    return (
        <React.Fragment>
            <Box sx={{ position: 'absolute', top: '5%', bottom: '10%', left: '5%', right: '5%', m: 0, p: 0, bgcolor: '#DCDBE7', height: '90%', width: '90%', boxShadow: 10 }} />
            <Box sx={{ position: 'relative' }}>
                <Grid container spacing={2} justifyContent='center'>
                    <Box component="img" src={GameBoyImage} />
                    <Grid container spacing={3}>
                        <Grid container item xs={12} justifyContent='center'><Link to='sp-rules' component="button" style={{ position:'absolute', top:'40%', textDecoration: 'none', color: 'black' }}>SinglePlayer</Link></Grid>
                        <Grid container item xs={12} justifyContent='center'><Link to='mp-rules' component="button" style={{ position:'absolute', top:'50%', textDecoration: 'none', color: 'black' }}>MultiPlayer</Link></Grid>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default Home;    