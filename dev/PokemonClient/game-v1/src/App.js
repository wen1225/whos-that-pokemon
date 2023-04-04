import './App.css';
import Axios from "axios";

import api from './api/axiosConfig';
import React, {useState, useEffect} from 'react';
import GetRandomPokemon from './components/getRandomPokemon';
import SinglePlayer from './pages/SinglePlayer';
import GetOtherPokemon from './components/getOtherPokemon';
import GameOver from './pages/GameOver';
import HomePage from './components/homePage';
import EndingPage from './components/getEndingPage';
function App() {
   
 return(
   <div>
    {/* <SinglePlayer /> */}
    {/* <GetRandomPokemon />*/}
    {/* <HomePage />*/}
    < EndingPage/>
    {/* <GetRandomPokemon /> */}
    {/* <GetOtherPokemon />
    <GetOtherPokemon /> */}
    {/* <GameOver /> */}
   </div>
   
 );
};

export default App;
