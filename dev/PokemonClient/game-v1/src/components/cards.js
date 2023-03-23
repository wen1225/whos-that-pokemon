import api from '../api/axiosConfig';
import React, {useState, useEffect, Component} from 'react';
// import  './getRandomPokemon.css';
import './cards.css';
import GetRandomPokemon from './getRandomPokemon';

function CardGrid(props){
  const { pokemon } = props;
    
  const [showIdContent, setShowIdContent] = useState(false);
  const [showRegionContent, setShowRegionContent] = useState(false);
  const [showTypeContent, setShowTypeContent] = useState(false);
  const [showEntryContent, setShowEntryContent] = useState(false);

  const [isIdClickable, setIsIdClickable] = useState(true);
  const [isRegionClickable, setIsRegionClickable] = useState(true);
  const [isTypeClickable, setIsTypeClickable] = useState(true);
  const [isEntryClickable, setIsEntryClickable] = useState(true);


  const handleIdClick = () => {
    if (isIdClickable) {
      setShowIdContent(true);
      setIsIdClickable(false);
    }
  };

  const handleRegionClick = () => {
    if (isRegionClickable) {
      setShowRegionContent(true);
      setIsRegionClickable(false);
    }
  };
  const handleTypeClick = () => {
    if (isTypeClickable) {
      setShowTypeContent(true);
      setIsTypeClickable(false);
    }
  };
  const handleEntryClick = () => {
    if (isEntryClickable) {
      setShowEntryContent(true);
      setIsEntryClickable(false);
    }
  };
  //END:

  const resetHintsComponent = () => {
    setShowIdContent(false);
    setShowRegionContent(false)
    setShowTypeContent(false)
    setShowEntryContent(false);

    setIsIdClickable(true);
    setIsRegionClickable(true);
    setIsTypeClickable(true);
    setIsEntryClickable(true);
    // setReload(!reload);
   
  }; 

    
    return(

      <div className="card-grid">

      {/* Card for Pokedex Number */}
      <div className="card" onClick={() => handleIdClick()}>
        {showIdContent ? (
          <h1 className='font'>{pokemon.id}</h1>
        ) : (
          <h1 className = 'font'> Pokedex Id: ?</h1>
        )}
      </div>


      {/* Card for Pokemon type */}
      <div className="card" onClick={() => handleTypeClick()}>
        {showTypeContent ? (
          <h1 className='font'>Pokemon Type(s): {pokemon.types}</h1>
        ) : (
          <h1 className = 'font'> Pokemon Type: ?</h1>
        )}
      </div>


      {/* Card for Pokemon Region */}
      <div className="card" onClick={() => handleRegionClick()}>
        {showRegionContent ? (
          <h1 className='font'>Region: {pokemon.region}</h1>
        ) : (
          <h1 className = 'font'> Pokemon Region: ?</h1>
        )}
      </div>

      {/*Card for Pokemon Pokedex entry */}
      <div className="card" onClick={() => handleEntryClick()}>
        {showEntryContent ? (
          <h1 className='font'> {pokemon.entry}</h1>
        ) : (
          <h1 className = 'font'> Pokedex Entry: ?</h1>
        )}
      </div>
    </div>
    );
}
export default CardGrid;