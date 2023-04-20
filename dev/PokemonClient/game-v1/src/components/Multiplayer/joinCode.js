import React, { useState, useEffect, Component } from 'react';
import './joinCode.css'
function DisplayJoinCode(props){
    const {joinCode} = props
    return(
       <div className='box'>
            <h1 className='text'>Join Code: {joinCode} </h1>

       </div>
    );
};

export default DisplayJoinCode;