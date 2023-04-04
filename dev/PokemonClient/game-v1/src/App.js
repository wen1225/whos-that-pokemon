import './App.css';
import Axios from "axios";

import api from './api/axiosConfig';
import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import GetRandomPokemon from './components/getRandomPokemon';
import SinglePlayer from './pages/SinglePlayer';
import MultiPlayer from './pages/MultiPlayer';

import GameOver from './pages/GameOver';
function App() {
   
 return(
  <>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='single' element={<SinglePlayer />}></Route>
    <Route path='multi' element={<MultiPlayer />}></Route>
   </Routes>
  </>
   
 );
};

export default App;
