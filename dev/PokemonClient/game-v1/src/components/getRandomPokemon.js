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

  /*
  Get's 4 Pokemon From Database at Once and sets them appropriately
  Needs to be different request, otherwise you will get the same Pokemon. 
  */
  const getPokemon = () => {
    const request = api.get("/api/v1/pokemon/random")
    const request2 = api.get("/api/v1/pokemon/random")
    const request3 = api.get("/api/v1/pokemon/random")
    const request4 = api.get("/api/v1/pokemon/random")

    Promise.all([request,request2,request3,request4])
      .then(responses => {
        setCorrectPokemon(responses[0].data);
        play(responses[0].data.cry);
        
        setR1Pokemon(responses[1].data);
        setR2Pokemon(responses[2].data);
        setR3Pokemon(responses[3].data);
        // console.log(responses); //For Testing Purposes
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