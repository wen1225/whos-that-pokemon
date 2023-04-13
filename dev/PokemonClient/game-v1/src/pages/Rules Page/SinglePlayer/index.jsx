import React from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Typography} from '@mui/material';

function SP_Rules() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/single');
        }, 3000)
    }, []);
    

    return (
        <React.Fragment>
            <Box position='absolute' top='5%' bottom='10%' left='5%' justifyContent="center" alignItems="center" sx={{ m: 0, p: 0, bgcolor: '#DCDBE7', height: '90%', width: '90%', boxShadow: 10 }} />
            <Typography variant="h1" position="absolute">Write Singleplayer rules here</Typography>
        </React.Fragment>
    );

}

export default SP_Rules;