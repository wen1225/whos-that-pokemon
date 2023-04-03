package com.treehouse.Who.s.That.Pokemon;

import java.util.List;
import java.util.Optional;
import java.util.Random;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToInt;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class PokemonService {
    @Autowired
    private PokemonRepository pokemonRepository;
   
    Random rand = new Random();
    

    //Returns all Pokemon from the Pokedex
    public List<Pokemon> allPokemon(){
        System.out.println(pokemonRepository.findAll().toString());
        return pokemonRepository.findAll();
    }

    //Returns a single Pokemon from the database given the Pokedex number
    public Optional<Pokemon> singlePokemon(int id){
        return pokemonRepository.findPokemonById(id);
    }

    //Return a random Pokemon from the Database
    public Optional<Pokemon> singleRandomPokemon(){
        int id  = rand.nextInt(200 - 1 + 1) + 1;
        return pokemonRepository.findPokemonById(id);
    }

    //Return the Pokedex description of a Pokemon given it's Pokedex id
    public Optional<Pokemon> pokedexEntry(int id){
        return pokemonRepository.findEntryById(id);
    }

    //Return the region of a Pokemon given its Pokedex id
    public Optional<Pokemon> region(int id){
        return pokemonRepository.findRegionById(id);
    }

    //Return the type of a Pokemon given its Pokedex id
    public Optional<Pokemon> types(int id){
        return pokemonRepository.findTypesById(id);
    }

}
