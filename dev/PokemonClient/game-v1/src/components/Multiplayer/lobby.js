import React, { useState, useEffect, Component } from 'react';
import DisplayBar from "../displayBar";
import { Button } from "@mui/material";
import DisplayJoinCode from './joinCode';

function MpLobby(){
    const [joinCode, setJoinCode] = useState('');
    

    useEffect(() => {
        const code = Math.random().toString(36).substring(2, 8);
        setJoinCode(code);
        
      }, []);
    
    //console.log(joinCode);
    return(
        <div className="container">
           <DisplayJoinCode joinCode = {joinCode}/>
           
           
        </div>
    )
};
export default MpLobby;