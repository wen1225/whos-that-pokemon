//import './App.css';
import api from '../api/axiosConfig';
import React, {useState, useEffect, Component} from 'react';
import useSound from 'use-sound';
import { Howl } from 'howler';
import './getRandomPokemon.css';

//Gets the random "correct" Pokemon for the round. Plays sound

function GetRandomPokemon(){
    const [pokemon, setPokemon] = useState([]);
    const [src, setsrc] = useState([]);
    
    const play = (src) =>{
      const sound = new Howl({
        src,
        html5:true,
      });
      sound.play()
    }

    const getPokemonComponent = () =>{
        api
          .get("/api/v1/pokemon/random")
          .then((response) => {
            console.log(response);
            setPokemon(response.data);
            setsrc(response.data.cry)
            play(response.data.cry);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };

      
      
        
      return(
        <div className='center'>
        
          <div className='box'>
            <button  onClick={() => {
                  
              getPokemonComponent();
                  
              }}>get random pokemon</button>
              
            <img  className='pokemon-bg' src = {pokemon.sprite} />
            <h1>{pokemon.name} </h1>
          </div>
        </div>
        
        
      );

};
export default GetRandomPokemon;