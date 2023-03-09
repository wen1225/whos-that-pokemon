import './App.css';
import Axios from "axios";

import api from './api/axiosConfig';
import React, {useState, useEffect} from 'react';
import GetRandomPokemon from './components/getRandomPokemon';
import SinglePlayerPage from './pages/SinglePlayer';
import GetOtherPokemon from './components/getOtherPokemon';
function App() {
   
 return(
   <div>
    <SinglePlayerPage />
    <GetRandomPokemon />
    <GetOtherPokemon />
    <GetOtherPokemon />
   </div>
   
 );
};

export default App;
