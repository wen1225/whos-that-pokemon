package com.treehouse.Who.s.That.Pokemon;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {
    @Autowired
    private PokemonRepository pokemonRepository;
    public List<Pokemon> allPokemon(){
        System.out.println(pokemonRepository.findAll().toString());
        return pokemonRepository.findAll();
    }
}
