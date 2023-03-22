//import './App.css';
import api from '../api/axiosConfig';
import React, { useState, useEffect, Component } from 'react';
import useSound from 'use-sound';
import { Howl } from 'howler';
import './getRandomPokemon.css';



//Gets the random "correct" Pokemon for the round. Plays sound

function GetRandomPokemon() {
  const [pokemon, setCorrectPokemon] = useState([]);
  const [pR1, setR1Pokemon] = useState([]);
  const [pR2, setR2Pokemon] = useState([]);
  const [pR3, setR3Pokemon] = useState([]);
  const [reload, setReload] = useState(false);
  const [randomArr, setRandomArr] = useState(true);

  const images = [];
  
 
  images.push(pokemon);
  images.push(pR1);
  images.push(pR2);
  images.push(pR3);

  
  images.sort(()=>Math.random() - 0.5); //Randomize position of image in the array

  
  
  const [src, setsrc] = useState([]);
  


 

  //START: Handles ability to click a hint button once
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
    setReload(!reload);
   
  };

  //Plays Pokemon's cry
  const play = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play()
  }

  //Get's Correct Pokemon Data from API
  const getPokemonComponent = () => {
    api
      .get("/api/v1/pokemon/random")
      .then((response) => {
        console.log(response);
        setCorrectPokemon(response.data);
        setsrc(response.data.cry)
        
        play(response.data.cry);

      })
      .catch((err) => {
        console.log(err);
      });
  };

 
//Get the Remaining 3 "incorrect Pokemon"
const getIncorrectPokemonComponent = () =>{
  api
      .get("/api/v1/pokemon/random")
      .then((response) => {
        console.log(response);
        setR1Pokemon(response.data);

      })
      .catch((err) => {
        console.log(err);
      });

  api
      .get("/api/v1/pokemon/random")
      .then((response) => {
        console.log(response);
        setR2Pokemon(response.data);

      })
      .catch((err) => {
        console.log(err);
      });

  api
      .get("/api/v1/pokemon/random")
      .then((response) => {
        console.log(response);
        setR3Pokemon(response.data);

      })
      .catch((err) => {
        console.log(err);
      });
  
}  

useEffect(()=>{
  getPokemonComponent(); 
  getIncorrectPokemonComponent();
  
},[reload])
  


  return (
    <div>
      
      {/* Button for resetting hints and going to the next round */}
      <button className = 'button' onClick={() => { 
        resetHintsComponent();
        
        }}> <h1 className='font'>Next Round</h1>
      </button>
      
      {/* Box where the Pokemon Appear */}
      <div className='box'>
        {/* Displays all Pokemon and checks to see if displayed POkemon is correct Pokemon */}
        
         {images.map((image, index) => (
        <img className='pokemon-bg' src={image.sprite}  key={index} onClick = {()=>{
          
          if(index === images.indexOf(pokemon)){
            console.log("w"); //correct
          }
          else console.log("l"); //incorrect
         }}/> 
       ))} 
         
      </div>
     

      {/* Container for all the hint cards */}
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



    </div>


  );

};
export default GetRandomPokemon;