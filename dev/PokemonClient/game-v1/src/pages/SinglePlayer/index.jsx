// import * as React from 'react';
import React, { useState, useEffect, Component } from 'react';
import styles from "./styles.module.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Button, Typography } from '@mui/material'



import GetRandomPokemon from '../../components/getRandomPokemon';
import RoundCounter from '../../components/roundCounter';


function SinglePlayer() {
    // const [roundNumber, setRoundNumber] = useState(0);

    return (
    <div>
         
        <React.Fragment>
            <Box position='absolute' top='5%' bottom='10%' left='5%' justifyContent="center"  alignItems="center" sx={{m: 0, p: 0, bgcolor: '#DCDBE7', height: '90%', width: '90%', boxShadow: 10}} >
                <GetRandomPokemon />
    
            </Box>

            
            
       
        </React.Fragment>
       
        
    </div>
    );
}

export default SinglePlayer;