import * as React from 'react';
import styles from "./styles.module.css";
import GetRandomPokemon from './getRandomPokemon';
import Timer from './timer.js';
import Button from '@mui/material/Button';

function SinglePlayer() {
    return (
    <div className={styles.container}>
        <h1>Single Player Mode</h1>
        <GetRandomPokemon />
        <Timer />
    </div>
    );
}

export default SinglePlayer;