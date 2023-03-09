import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Timer() {
    const alloted_time = 10;
    const [remainingTime, setRemainingTime] = useState(alloted_time);
    const [isActive, setIsActive] = useState(false);

    function startTimer() {
        setIsActive(true);
    }

    function resetTimer() {
        setIsActive(false);
        setRemainingTime(alloted_time);
    }

    useEffect(() => {
        let interval = null;
        if (isActive && remainingTime > 0) {
            interval = setInterval(() => {
                setRemainingTime(remainingTime - 1);
            }, 1000);
        } else if (remainingTime === 0) {
            clearInterval(interval);
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [remainingTime, isActive]);


    return (
        <>
        <Button variant="contained" onClick={startTimer}>Start</Button>
        <Button variant="contained" onClick={resetTimer}>Reset</Button>
        <p>Time remaining: {remainingTime}</p>
        </>
    )
}

export default Timer;