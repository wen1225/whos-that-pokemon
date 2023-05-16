# Team TreeHouse
Abhinav Selvaraj (Lead), Breanna Chi, Ken Ho, Prabhleen Bagri 

## Who's That Pokemon
https://github.com/wen1225/whos-that-pokemon

### Technologies Used
  #### [Frontend] HTML, CSS, React, MUI 
  #### [Backend] Java, Spring Boot, MongoDB (database), Firebase (multiplayer)
  #### [Deployment] AWS S3 (frontend), AWS EC2 (backend)
    
### Project Description
Our project is a web based application. It's a game where the users will be listening to a short audio clip known as a "cry" which just means a growl/groaning sound from a Pokemon and make a correct guess. There are more than 1000 Pokemon as of today and each of them has different cries. This game will be testing the player's knowledge about their childhood game (hopefully).

During each round, a player is presented with four Pokemons and one cry. The cry corresponds to the correct Pokemon and if guessed correctly, the player will be awarded 500 points to a maximum of 2500 points. Players can only guess onces per turn and if needed, they are also presented with four hint cards and each card will decrease the total points earned by 100. In other words, if the player used up all four hints for that turn, his/her maximum earnable points would be 100 instead of 500.

At the end of the round, the player's total points will be displayed and they will be redirected to the home page automatically after some time. A menu button is also provided if the player choose to not wait.
