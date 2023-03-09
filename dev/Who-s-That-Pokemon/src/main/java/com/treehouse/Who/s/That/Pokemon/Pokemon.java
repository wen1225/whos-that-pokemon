package com.treehouse.Who.s.That.Pokemon;

import org.bson.types.Binary;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "pokemon")
@Data 
@AllArgsConstructor
@NoArgsConstructor
public class Pokemon {
   //Represents a Pokemon Object in the Database
    @Id   
    private ObjectId obId;
    private int id;
    private String name;
    private String Types;
    private String Region;
    private String Entry;

    private String Cry;
    private String Sprite;
}
