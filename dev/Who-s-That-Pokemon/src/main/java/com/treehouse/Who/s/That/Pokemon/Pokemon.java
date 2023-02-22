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
   
    @Id   
    private ObjectId obId;
    private int id;
    private String name;
    private String type;
    private String Region;
    private String Entry;

    private Binary Cry;
}
