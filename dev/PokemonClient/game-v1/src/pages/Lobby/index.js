import React, { useState, useEffect, Component } from 'react';
import Box from '@mui/material/Box';
import MpLobby from '../../components/Multiplayer/lobby';
import GetRandomPokemon from '../../components/getRandomPokemon';

function Lobby() {
    // const [roundNumber, setRoundNumber] = useState(0);

    return (
        
        <React.Fragment>
            <Box position='absolute' top='5%' bottom='10%' left='5%' justifyContent="center" alignItems="center" sx={{ m: 0, p: 0, bgcolor: '#DCDBE7', height: '90%', width: '90%', boxShadow: 10 }} />
            <MpLobby />
        </React.Fragment>
        
    );
}

export default Lobby;