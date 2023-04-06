import React, { useState, useEffect, Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Button, Typography } from '@mui/material'

function RoundCounter(props){
    const {roundCounter} = props;

    return(
        <div>Round Counter: {roundCounter}</div>
    )
}
export default RoundCounter;