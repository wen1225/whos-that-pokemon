How to build game from scratch for expert users:
Updated - 4/16/2023

Prerequisite downloads:
   
  Have working IDE with most recent Java Version (we recommend VSCode
  Have Node.js installed
  Have SpringBoot installed https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack 
  Install CORS extention to GoogleChrome https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en 
  Toggle the CORS extension on (will be off by defualt)


To run application:
  
  Create a folder anywhere on your machine and name it appropriately
  Open the folder in any IDE (We recommend VScode)
  Open a terminal in the IDE and clone the repo: git clone https://github.com/wen1225/whos-that-pokemon.git
  Note: PokemonClient is the front end and Who'sThatPokemon is the backend
  Under Who'sThatPokemon, navigate to Application.java. Right click it and run. If successfull, localhost:8080 should display "Hello World!!!"
  
  **NOTE: As of 4/16/2023, the backend is running on an amazon ec2 instance. Thus, the above steps are not necessary to actually run the project, and will produce an error when trying
  to run the frontend. To verify progress of working application, please go to the bottom of this documentation. 
  
  
  
  In the terminal, navigate to /PokemonClient/game-v1 in the project directory 
  If first time running the project, will need to run the following commands:
  ```
  npm install
  npm install use-sound
  npm install howler
  npm i --legacy-peer-deps
  ```
  
  Run npm start
  If successful, localhost:3000 should pop up with the application running
  
  Press button to see pokemon data displayed and backend connection demonstrated
  This is how to build the webgame locally
  
  
  ***TO VERIFY PROGRESS FOLLOW THE STEPS BELOW***
  In the terminal, navigate to /PokemonClient/game-v1 in the project directory 
  If first time running the project, will need to run the following commands:
  ```
  npm install
  npm install use-sound
  npm install howler
  npm i --legacy-peer-deps
  ```
  
  Lastly, run the following:
  `npm start`
  
   
    
    
    
    
    
    
  
