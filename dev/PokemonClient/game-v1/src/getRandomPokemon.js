import './App.css';
import api from './api/axiosConfig';
import React, {useState, useEffect, Component} from 'react';
import useSound from 'use-sound';
import { Howl } from 'howler';

;

function GetRandomPokemon(){
    const [pokemon, setPokemon] = useState([]);
    const [cry, setCry] = useState([]);
    
    

    const getPokemonComponent = () =>{
        api
          .get("/api/v1/pokemon/random")
          .then((response) => {
            console.log(response);
            setPokemon(response.data);
            setCry(response.data.cry)
          })
          .catch((err) => {
            console.log(err);
          });

        
      };


     
      const play = (src) =>{
        const sound = new Howl({
          src,
          html5:true,
        });
        sound.play()
      }
          
        
      return(
        
        <d1>
            <h1>Who's That Pokemon</h1>
                Test <button onClick={() => {
                  play(cry);
                  getPokemonComponent();
                  
                  }}>get random pokemon</button>
                
              
                <h1>{pokemon.name} </h1>
                <h1>{pokemon.entry}</h1>
                <h1>{pokemon.types}</h1>
                <h1>{pokemon.region}</h1>
                <h1>{pokemon.cry}</h1>
                <h1>{cry}</h1>
                <h1></h1>
                
                
                
        </d1>
        
        
      );

};
export default GetRandomPokemon;