import React from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {Box} from '@material-ui/core';
import { Typography } from '@mui/material';


function MP_Rules() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/multi');
        }, 3000)
    }, []);
    

    return (
        <React.Fragment>
            <Box position='absolute' top='5%' bottom='10%' left='5%' justifyContent="center" alignItems="center" sx={{ m: 0, p: 0, bgcolor: '#DCDBE7', height: '90%', width: '90%', boxShadow: 10 }} />
            <Typography variant="h1" position="absolute">Write Multiplayer rules here</Typography>
        </React.Fragment>
    );

}

export default MP_Rules;