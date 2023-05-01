import React, { useState, useEffect } from 'react';
import DisplayJoinCode from './joinCode';
import { firebase, db, auth } from './firebase';
import 'firebase/database';


function MpLobby(){
    const [joinCode, setJoinCode] = useState(0);

    
    
    return(
        <div className="container">
           <DisplayJoinCode joinCode = {joinCode}/>
        </div>
    )
};

export default MpLobby;
