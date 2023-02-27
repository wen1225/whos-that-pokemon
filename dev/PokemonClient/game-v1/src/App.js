import logo from './logo.svg';
import './App.css';
import Axios from "axios";

import api from './api/axiosConfig';
import React, {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  const getPokemon = () =>{
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

  useEffect(() => {
    getPokemon();
  },[])

  return (
    <div className='item-container'>
      <h1 className='project-title'>Who's That Pokemon</h1>

      Test <button onClick={getPokemon}>get random pokemon</button>
        
        <h1>{pokemon.name} </h1>
        <h1>{pokemon.entry}</h1>
        <h1>{pokemon.types}</h1>
        <h1>{pokemon.region}</h1>
    </div>
  );
};

export default App;
