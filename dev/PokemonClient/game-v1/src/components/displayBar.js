import React, { useState } from 'react';
import './displayBar.css';
import Popup from './popup';

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
        setIsCorrect(true);
        setBgColor('#AFE1AF') //Sets the color of the popup green
      } else {
        console.log('Incorrect Pokemon clicked.');
        setIsCorrect(false);
        setBgColor('#FA8072'); //Sets the color of the popup red
      }
      setSelectionMade(true); //Selection has been made

      //Resets the selection of the Pokemon after 2000 milliseconds
      setTimeout(() => {
        setSelectionMade(false);
      }, 2000);
      
    }
  };

  //Returns the box where all the clickable Pokemon images are displayed
  return (
    <div>
      <div className="box">
        {pokemonData.map((pokemon, index) => (
          <div key={index}>
            <img className="pokemon-bg" src={pokemon.sprite} alt={pokemon.name} onClick={() => handleClick(pokemon)} />
          </div>
        ))}
      </div>
      {/* Popup for Correct Pokemon */}
      {isCorrect && selectionMade &&(
        <Popup className="popup" pokemon={correctPokemon} text= "Correct!" backgroundColor={bgColor} onClose={() => setIsCorrect(false)} />
      )}


      {/* Popup for Incorrect Pokemon */}
      {!isCorrect && selectionMade && (
        <Popup className="popup" pokemon={correctPokemon} text = "Incorrect" backgroundColor={bgColor} onClose={() => setIsCorrect(false)} />
      )}
    </div>
  );
  
  
}

export default DisplayBar;
