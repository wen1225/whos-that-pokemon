import logo from './logo.svg';
import './App.css';
import Axios from "axios";

import api from './api/axiosConfig';
import React, {useState, useEffect} from 'react';
import GetRandomPokemon from './getRandomPokemon';

function App() {
 return(
  <GetRandomPokemon />
 );
  

};

export default App;
