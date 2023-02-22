package com.treehouse.Who.s.That.Pokemon;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/pokemon")
public class PokemonController {
    @Autowired
    private PokemonService pokemonService;

    @GetMapping
    public ResponseEntity<List<Pokemon>> getAllPokemon(){
        return new ResponseEntity<List<Pokemon>>(pokemonService.allPokemon(), HttpStatus.OK);
    }

    @GetMapping("/random")
    public ResponseEntity<Optional<Pokemon>> getSingleRandomPokemon(){
        return new ResponseEntity<Optional<Pokemon>>(pokemonService.singleRandomPokemon(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Pokemon>> getEntryById(@PathVariable int id){
        return new ResponseEntity<Optional<Pokemon>>(pokemonService.pokedexEntry(id), HttpStatus.OK);
    }

    @GetMapping("/region/{id}")
    public ResponseEntity<Optional<Pokemon>> getRegionById(@PathVariable int id){
        return new ResponseEntity<Optional<Pokemon>>(pokemonService.region(id), HttpStatus.OK);
    }

    @GetMapping("/types/{id}")
    public ResponseEntity<Optional<Pokemon>> getTypesById(@PathVariable int id){
        return new ResponseEntity<Optional<Pokemon>>(pokemonService.types(id), HttpStatus.OK);
    }
}
