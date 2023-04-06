import api from '../api/axiosConfig';
import React, {useState, useEffect, Component} from 'react';
// import  './getRandomPokemon.css';
import './displayBar.css';
import './getRandomPokemon'

export function DisplayBar(props){
    const { pokemonData,correctPokemon } = props;
    
    
   
    return(
    <div className='box'>
        {pokemonData.map((pokemon, index) => (
        <div key={index}>
          <img className = 'pokemon-bg' src={pokemon.sprite} alt = {pokemon.name} onClick = {()=>{
            if(pokemon.name == correctPokemon.name){
                console.log("W");
            } 
            else{
                console.log("L");
            }
          }} />
        </div>
      ))}
    </div>
    );
}
export default DisplayBar;


