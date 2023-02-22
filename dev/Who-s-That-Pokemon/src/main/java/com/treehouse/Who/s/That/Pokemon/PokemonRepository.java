package com.treehouse.Who.s.That.Pokemon;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface PokemonRepository extends MongoRepository<Pokemon, ObjectId> {
    //Query to find pokemon based on their pokedex number
    Optional<Pokemon> findPokemonById(int id);


    //Query to return the pokedex entry
    @Query(value = "{'id' : ?0 }", fields= "{'Entry' : 1}")
    Optional<Pokemon> findEntryById(int id);

    //Query to return only the region
    @Query(value = "{'id' : ?0 }", fields= "{'Region' : 1}")
    Optional<Pokemon> findRegionById(int id);


    //Query to return only the types
    @Query(value = "{'id' : ?0 }", fields= "{'Types' : 1}")
    Optional<Pokemon> findTypesById(int id);


}
