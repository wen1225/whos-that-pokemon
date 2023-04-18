import api from '../api/axiosConfig';
import React, { useState } from 'react';
import './displayBar.css';
import { blue, green } from '@mui/material/colors';

export function DisplayBar(props) {
  const { pokemonData, correctPokemon } = props;
  const [bgColor, setBgColor] = useState({});
  const [selectionMade, setSelectionMade] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);


   /*Handles Clicks on Pokemon image.
  Clicks on the correct Pokemon will make its background green.
  Clicks on the incorrect Pokemon will make its background red.
  */
  const handleClick = (pokemon) => {
    if (!selectionMade) {
      if (pokemon.name === correctPokemon.name) {
        console.log('Correct Pokemon clicked!');
        setBgColor((prevBgColor) => ({
          ...prevBgColor,
          [pokemon.id]: '#AFE1AF', //green
        }));
        setIsCorrect(true);
      } else {
        console.log('Incorrect Pokemon clicked.');
        setBgColor((prevBgColor) => ({
          ...prevBgColor,
          [pokemon.id]: '#FA8072', //red
        }));
        setIsCorrect(false);
      }
      //Resets the bg of the Pokemon after 2000 milliseconds
      setTimeout(() => {
        setBgColor((prevBgColor) => ({
          ...prevBgColor,
          [pokemon.id]: '',
        }));
        setSelectionMade(false);
      }, 2000);
      setSelectionMade(true);
    }
  };

  //Returns the box where all the clickable Pokemon images are displayed
  return (
    <div className='box'>
      {pokemonData.map((pokemon, index) => (
        <div key={index}>
          <img className='pokemon-bg' src={pokemon.sprite} alt={pokemon.name} style={{ backgroundColor: bgColor[pokemon.id] }} onClick={() => handleClick(pokemon)}
          />
          
        </div>
      ))}
      
    </div>
    
  );
}

export default DisplayBar;
