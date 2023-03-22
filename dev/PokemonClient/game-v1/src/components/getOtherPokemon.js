//import './App.css';
import api from '../api/axiosConfig';
import React, {useState, useEffect, Component} from 'react';
import  './getRandomPokemon.css';

//Gets the other "incorrect" Pokemon to present options. Does not play sound

export function GetOtherPokemon(){
    const [pokemon, setPokemon] = useState([]);
    const [src, setsrc] = useState([]);

    const getPokemonComponent = () =>{
        api
          .get("/api/v1/pokemon/random")
          .then((response) => {
            console.log(response);
            setPokemon(response.data);
            
          })
          .catch((err) => {
            console.log(err);
          });
         
        
    };
    
    getPokemonComponent();

    return(<div>{<img className='pokemon-bg' src={pokemon.sprite} />}</div>);

};
export default GetOtherPokemon;