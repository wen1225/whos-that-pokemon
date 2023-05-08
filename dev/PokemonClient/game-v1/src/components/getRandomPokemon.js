//import './App.css';
import api from '../api/axiosConfig';
import React, { useState, useEffect, Component } from 'react';
import { Howl } from 'howler';
import './getRandomPokemon.css';
import CardGrid from './cards';
import { DisplayBar } from './displayBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import PointSystem from './pointSystem';

//Gets the random "correct" Pokemon for the round. Plays sound

function GetRandomPokemon() {
  const [pokemon, setCorrectPokemon] = useState([]);
  const [pR1, setR1Pokemon] = useState([]);
  const [pR2, setR2Pokemon] = useState([]);
  const [pR3, setR3Pokemon] = useState([]);

  const [pokemonData,setPokemonData] = useState([]);
  const [roundCounter, setRoundCounter] = useState(1);
  const [resetHints, setResetHints] = useState(false);
  const [src, setsrc] = useState([]);

  //For point system
  const [isCorrect, setIsCorrect] = useState(false);
  const [hintCount, setHintCount] = useState(0);
  

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

    while (requests.length < 4 && roundCounter < 6) {
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
  // pokemonData.push(pokemon);
  // pokemonData.push(pR1);
  // pokemonData.push(pR2);
  // pokemonData.push(pR3);
  
  // pokemonData.sort(() => Math.random() - 0.5)
  useEffect(() =>{
    const data = [pokemon, pR1, pR2, pR3];
    data.sort(()=>Math.random()-0.5);
    setPokemonData(data);
  },[pokemon, pR1, pR2, pR3]);

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

  


  const handlePokemonOnClick = () =>{
    setResetHints(!resetHints);
    incrementRounds();
  }

  const handleCorrectGuess = () => {
    setIsCorrect(true);
  }

  const resetCorrectGuess = () =>{
    setIsCorrect(false);
  }

  const handleHintClick = () => {
    setHintCount(count => count + 1);
  }

  const resetHintCount = () =>{
    setHintCount(0);
  }

  return (
    <React.Fragment>
    
      <div className="container">
        <DisplayBar pokemonData={pokemonData} correctPokemon={pokemon} onSelectionMade={handlePokemonOnClick} handleCorrectGuess={handleCorrectGuess} resetCorrectGuess = {resetCorrectGuess}/> {/*Sends data to displayBar component to display all the images, and information about the correctPokemon*/}
        <CardGrid pokemon={pokemon} resetHints={resetHints} handleHintClick={handleHintClick} resetHintCount = {resetHintCount}/> {/*Sends correct Pokemon's data to CardGrid component to display hints*/}
        <PointSystem isCorrect={isCorrect} hintCount={hintCount} roundCounter = {roundCounter} />
      </div>

      <Box sx={{ position: 'relative' }}><Typography variant="h6">Round: {roundCounter}</Typography></Box>


    </React.Fragment>
  );



};

export default GetRandomPokemon; 