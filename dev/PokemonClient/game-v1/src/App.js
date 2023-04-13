import './App.css';
import Axios from "axios";

import api from './api/axiosConfig';
import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import GetRandomPokemon from './components/getRandomPokemon';
import SinglePlayer from './pages/SinglePlayer';
import MultiPlayer from './pages/MultiPlayer';
import SP_Rules from './pages/Rules Page/SinglePlayer';
import MP_Rules from './pages/Rules Page/MultiPlayer';

import GameOver from './pages/GameOver';
function App() {
   
 return(
  <>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='single' element={<SinglePlayer />}></Route>
    <Route path='multi' element={<MultiPlayer />}></Route>
    <Route path='sp-rules' element={<SP_Rules />}></Route>
    <Route path='mp-rules' element={<MP_Rules />}></Route>
   </Routes>
  </>
   
 );
};

export default App;
