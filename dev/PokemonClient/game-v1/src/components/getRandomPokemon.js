//import './App.css';
import api from '../api/axiosConfig';
import React, { useState, useEffect, Component } from 'react';
import useSound from 'use-sound';
import { Howl } from 'howler';
import './getRandomPokemon.css';
import CardGrid from './cards';
import { DisplayBar } from './displayBar';
import RoundCounter from './roundCounter';
import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

//Gets the random "correct" Pokemon for the round. Plays sound

function GetRandomPokemon() {
  const [pokemon, setCorrectPokemon] = useState([]);
  const [pR1, setR1Pokemon] = useState([]);
  const [pR2, setR2Pokemon] = useState([]);
  const [pR3, setR3Pokemon] = useState([]);

  const pokemonData = [];
  const [roundCounter, setRoundCounter] = useState(0);
  const [resetHints, setResetHints] = useState(false);
  const [src, setsrc] = useState([]);

  /*Plays Pokemon's cry after a small delay*/
  const play = (src) => {
    const sound = new Howl({
      src,
      html5: true,
      onend: () => {
        console.log('Audio has finished playing');
      },
      onplayerror: (err) => {
        console.log(`Failed to play audio: ${err}`);
      }
    });
  
    const delayInSeconds = 0.75;
    const delayInMilliseconds = delayInSeconds * 1000;
  
    setTimeout(() => {
      sound.play();
    }, delayInMilliseconds);
  };
  //*IN PROGRESS TO CHECK IF POKEMON HAS BEEN USED ONCE IN SESSION
  function checkIfValueExists(value) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const storedValue = localStorage.getItem(key);

      if (storedValue === value) {
        return true;
      }
    }
    return false;
  }

  /*
  Get's 4 Pokemon From Database at Once and sets them appropriately
  Keeps requesting until the 4 Pokemon are all unqiue from one another. 
  */
  const getPokemon = () => {

    const randomInts = [];
    const requests = [];
    const requestUrl = "/api/v1/pokemon/"

    while (requests.length < 4) {
      const randomInt = Math.floor(Math.random() * 1008) + 1;

      if (!randomInts.some(p => p === randomInt)) {
        if (checkIfValueExists(randomInt) == false) {
          const request1 = api.get(`${requestUrl}${randomInt}`)
          requests.push(request1);
          randomInts.push(randomInt);
          localStorage.setItem(randomInt.toString(), randomInt.toString());
        }

      }
    }
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const storedValue = localStorage.getItem(key);
      console.log(localStorage.length);
    }

    Promise.all(requests)
      .then(responses => {
        setCorrectPokemon(responses[0].data);
        setR1Pokemon(responses[1].data);
        setR2Pokemon(responses[2].data);
        setR3Pokemon(responses[3].data);
        play(responses[0].data.cry);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  //Puts the Pokemon in an Array and Randomizes then
  pokemonData.push(pokemon);
  pokemonData.push(pR1);
  pokemonData.push(pR2);
  pokemonData.push(pR3);
  pokemonData.sort(() => Math.random() - 0.5)

  //Increments the round Counter, we only want to get new pokemon once per round
  const incrementRounds = () => {
    if (roundCounter != 20) {
      setRoundCounter(roundCounter + 1);
    }
  }

  //Ensures we only get the Pokemon once per page refresh
  useEffect(() => {
    getPokemon();
  }, [roundCounter])

  return (
    <React.Fragment>
      {/*<button className='button' onClick={() => {
        incrementRounds();
        setResetHints(!resetHints);
      }
      }>Next Round</button>*/}
      <div className="container">
        <DisplayBar pokemonData={pokemonData} correctPokemon={pokemon} /> {/*Sends data to displayBar component to display all the images, and information about the correctPokemon*/}
        <CardGrid pokemon={pokemon} resetHints={resetHints} /> {/*Sends correct Pokemon's data to CardGrid component to display hints*/}
      </div>

      <Box sx={{ position: 'relative' }}><Typography variant="h6">Counter: {roundCounter}</Typography></Box>

      {/*Temporary counter component to test counting*/}
      {/*Commented out since it follows normal document flow and will be masked by the box and grid components */}
      {/*<RoundCounter roundCounter={roundCounter} />*/}
      <Button onClick={() => {
        incrementRounds();
        setResetHints(!resetHints);
      }}>Next Round</Button>
    </React.Fragment>
  );



};

export default GetRandomPokemon; 