import React, { useState, useEffect } from 'react';
import DisplayJoinCode from './joinCode';
import { firebase, db, auth } from './firebase';
import 'firebase/database';


function MpLobby(){
    const [joinCode, setJoinCode] = useState(0);
    const [updateJoinCode, setUpdateJoinCode] = useState(false);
    const [username, setUsername] = useState("");

    const gameJoinCode = "123Test";
    const handleUsernameChange = (event) =>{
        setUsername(event.target.value);
    };

    const handleJoinCodeChange = (event) =>{
        setJoinCode(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`Username: ${username}, Join Code: ${joinCode}, Actual Join Code: ${gameJoinCode}`);
        if(joinCode == gameJoinCode){
            const data = {
                gameCode: gameJoinCode,
                player: username
            }; 
    
            db.ref('game').push(data)
                .then(() => console.log('Data written to Firebase successfully!'))
                .catch((error) => console.log('Error writing data to Firebase: ', error));
        }
        else   
            console.log("Wrong Join Code");
        
    }
    // useEffect(() => {
    //     const exampleData = {
    //         name: 'John',
    //         age: 30,
    //         email: 'john@example.com',
    //     };

    //     db.ref('example').push(exampleData)
    //         .then(() => console.log('Data written to Firebase successfully!'))
    //         .catch((error) => console.log('Error writing data to Firebase: ', error));
    // }, [updateJoinCode]);
    
    return(
        <div>
            <form onSubmit={handleSubmit} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1" }}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange}/>
                <label htmlFor="join-code">Join Code: </label>
                <input type="text" id="join-code" value={joinCode} onChange={handleJoinCodeChange}/>
                <button type="submit">Join</button>
            </form>


           <DisplayJoinCode joinCode = {gameJoinCode}/>
        </div>
    )
};

export default MpLobby;
