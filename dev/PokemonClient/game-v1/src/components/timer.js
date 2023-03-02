import {useEffect, useRef, useState} from 'react';
import Button from '@mui/material/Button';

function Timer({seconds}){
    /*const [time, setTime] = useState(seconds);
    const [isActive, setIsActive] = useState(false);
    
    
    function toggle() {
        setIsActive(true);
        console.log(!isActive);
    }

    useEffect(() => {
        let timer = null;
        if (isActive && seconds >= 0) {
            timer = setInterval(() => {
            setTime((seconds) => seconds - 1);
            }, 1000);
            console.log(time);
        }
        return () => clearInterval(timer);
      }, []);

    return (
        <div>
            <Button variant="contained" onClick={toggle}>Start</Button>
            <div>Time: {time}</div>
        </div>
    )*/
}

export default Timer;