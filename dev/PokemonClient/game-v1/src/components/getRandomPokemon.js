//import './App.css';
import api from '../api/axiosConfig';
import React, { useState, useEffect, Component } from 'react';
import useSound from 'use-sound';
import { Howl } from 'howler';
import './getRandomPokemon.css';
import CardGrid from './cards';
import {DisplayBar} from './displayBar';


//Gets the random "correct" Pokemon for the round. Plays sound

function GetRandomPokemon() {
  const [pokemon, setCorrectPokemon] = useState([]);
  const [pR1, setR1Pokemon] = useState([]);
  const [pR2, setR2Pokemon] = useState([]);
  const [pR3, setR3Pokemon] = useState([]);

  const pokemonData = [];
  const [rel, setRel] = useState(false);
  const [src, setsrc] = useState([]);

  /*Plays Pokemon's cry*/
  const play = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play()
  }

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
  Needs to be different request, otherwise you will get the same Pokemon. 
  */
  const getPokemon = () => {
    // const randomInt = Math.floor(Math.random() * 100) + 1;
    const randomInts = [];
    const requests = [];
    const requestUrl = "/api/v1/pokemon/"
    // const request1 = api.get(`${requestUrl}${randomInt}`)
    // requests.push(request1);
    
    while(requests.length< 4){
      const randomInt = Math.floor(Math.random() * 200) + 1;
      
      if (!randomInts.some(p => p === randomInt) ) {
          if(checkIfValueExists(randomInt) == false){
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
    
    
    // const request2 = api.get("/api/v1/pokemon/random")
    // const request3 = api.get("/api/v1/pokemon/random")
    // const request4 = api.get("/api/v1/pokemon/random")



    
    Promise.all(requests)
      .then(responses => {
        setCorrectPokemon(responses[0].data);
        setR1Pokemon(responses[1].data);
        setR2Pokemon(responses[2].data);
        setR3Pokemon(responses[3].data);
        // console.log(responses); //For Testing Purposes
        play(responses[0].data.cry);
      })
      .catch((err) => {
        console.log(err);
    })    
  };

  
  //Ensures we only get the Pokemon once per page refresh
  useEffect(()=>{
    getPokemon(); 
  },[rel])
  
  pokemonData.push(pokemon);
  pokemonData.push(pR1);
  pokemonData.push(pR2);
  pokemonData.push(pR3);
  pokemonData.sort(() => Math.random() - 0.5)
  
  return(
    <div>
        <button className='button' onClick={()=>setRel(!rel)} >Click me</button>
        
        <DisplayBar pokemonData = {pokemonData} correctPokemon = {pokemon}/> {/*Sends data to displayBar component to display all the images, and information about the correctPokemon*/}
        <CardGrid pokemon = {pokemon} /> {/*Sends correct Pokemon's data to CardGrid component to display hints*/}
    </div>
  ) ;

  

};

export default GetRandomPokemon ; 