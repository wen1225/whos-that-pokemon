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
        <div> 
        
         
            <div className='box'>
              <button  onClick={() => {getPokemonComponent();}}>get random pokemon</button>
              <img  className='pokemon-bg' src = {pokemon.sprite} />
            </div>
           
        
          <section>
            <div className = "cards">
              <div className = "card">
                <h1>{pokemon.name}</h1>
              </div>
              <div className = "card">
                <h1>{pokemon.types}</h1>
              </div>
                <div className = "card" >
                <h1>{pokemon.region}</h1>
              </div>
              <div className = "card">
                <h1>{pokemon.entry}</h1>
              </div>
            </div>
          </section>
         
        
        </div>
      
        
      );

};
export default GetRandomPokemon;