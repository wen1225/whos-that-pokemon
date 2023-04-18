import api from '../api/axiosConfig';
import React, { useState, useEffect, Component } from 'react';
// import  './getRandomPokemon.css';
import './displayBar.css';
import './getRandomPokemon'
import { blue, green } from '@mui/material/colors';

 export function DisplayBar(props) {
  const { pokemonData, correctPokemon } = props;
  const [bgColor, setBgColor] = useState('#EFEFEF');


  /*Handles Clicks on Pokemon image.
  Clicks on the correct Pokemon will make its background green.
  Clicks on the incorrect Pokemon will make its background red.
  */
  const handleClick = (pokemon) =>{
    if(pokemon.name == correctPokemon.name){
      console.log("w");
      setBgColor((prevBgColor) => ({
        ...prevBgColor,
        [pokemon.id]: '#AFE1AF', //green
      }));
    }
    else{
      console.log("l");
      setBgColor((prevBgColor) => ({
        ...prevBgColor,
        [pokemon.id]: '#FA8072 ', //red
      }));
    }
    setTimeout(() => {
      setBgColor((prevBgColor) => ({
        ...prevBgColor,
        [pokemon.id]: '#EFEFEF',
      }));
    }, 3000);
  }

  
    
  //Returns the box where all the clickable Pokemon images are displayed
  return (
    <div className='box' >
      {pokemonData.map((pokemon, index) => (
        <div key={index}>
          <img className='pokemon-bg' src={pokemon.sprite} alt={pokemon.name}  style={{ backgroundColor: bgColor[pokemon.id] }} onClick={() => handleClick(pokemon)}>

          </img>
        </div>
      ))}
    </div>
  );
}
export default DisplayBar;


