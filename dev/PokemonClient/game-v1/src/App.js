import './App.css';
import Axios from "axios";

import api from './api/axiosConfig';
import React, {useState, useEffect} from 'react';
/*import GetRandomPokemon from './getRandomPokemon';*/
import SinglePlayerPage from './pages/SinglePlayer';
function App() {
 return(
    <SinglePlayerPage />
 );
};

export default App;
