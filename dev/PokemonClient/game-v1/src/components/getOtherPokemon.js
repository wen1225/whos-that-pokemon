//import './App.css';
import api from '../api/axiosConfig';
import React, {useState, useEffect, Component} from 'react';

//Gets the other "incorrect" Pokemon to present options. Does not play sound

function GetOtherPokemon(){
    const [pokemon, setPokemon] = useState([]);
    const [src, setsrc] = useState([]);

    const getPokemonComponent = () =>{
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

      
      
        
      return(
        
        <d1>
            
                Test <button onClick={() => {
                  
                  getPokemonComponent();
                  
                  }}>get random pokemon</button>
                  
              
                <h1>{pokemon.name} </h1>
                {/* <h1>{pokemon.entry}</h1>
                <h1>{pokemon.types}</h1>
                <h1>{pokemon.region}</h1>
                <h1>{pokemon.cry}</h1>
                <h1>{pokemon.sprite}</h1> */}
                <img src = {pokemon.sprite} />
                <h1></h1>
                
                
                
        </d1>
        
        
      );

};
export default GetOtherPokemon;