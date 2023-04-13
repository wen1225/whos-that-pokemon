import api from '../api/axiosConfig';
import React, { useState, useEffect, Component } from 'react';
// import  './getRandomPokemon.css';
import './displayBar.css';
import './getRandomPokemon'
import PointSystem from './PointSystem';


export function DisplayBar(props) {
  const { pokemonData, correctPokemon , handlePoints} = props;



  return (
    <div className='box'>
      {pokemonData.map((pokemon, index) => (
        <div key={index}>
          <img className='pokemon-bg' src={pokemon.sprite} alt={pokemon.name} onClick={() => {
            if (pokemon.name == correctPokemon.name) {
              console.log("W");
              //and update point counter 
              handlePoints(500);
              //test update
            }
            else {
              console.log("L");
            }
          }} />
        </div>
      ))}
    </div>
  );
}
export default DisplayBar;


