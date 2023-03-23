import * as React from 'react';
import styles from "./styles.module.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Typography } from '@mui/material'

import Timer from '../../components/timer';
import GetRandomPokemon from '../../components/getRandomPokemon';
import DisplayBar from '../../components/displayBar';
import CardGrid from '../../components/cards';

function SinglePlayer() {
    return (
    <div>
         
        <React.Fragment>
            <Box position='absolute' top='5%' bottom='10%' left='5%' sx={{m: 0, p: 0, bgcolor: '#DCDBE7', height: '90%', width: '90%', boxShadow: 10}} />
            {/* <Typography variant='h1' position='absolute' top='8%' bottom='10%' left='10%' sx={{m: 0, p: 0, bgcolor: '#DCDBE7', height: '72%', width: '80%'}}>00:04:31</Typography> */}
            {/* <Timer /> */}
            
            {/* <CardGrid /> */}
            
        <GetRandomPokemon />
        </React.Fragment>
        
    </div>
    );
}

export default SinglePlayer;