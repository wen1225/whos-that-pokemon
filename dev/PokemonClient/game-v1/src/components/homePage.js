import React from 'react';
import gameboyImage from './gameboy.png';
import './homePage.css';

const HomePage = () => {
    return (
      <div className="landing-page">
        <h1>Whos that Pokemon</h1>
        <div className="gameboy-container">
          <img src={gameboyImage} alt="Gameboy" />
        </div>
        <div className="button-container">
          <button>Single Player</button>
          <button>Multiplayer</button>
        </div>
        <footer>
          <p>&copy; By Treehouse.</p>
        </footer>
      </div>
    );
  }

export default HomePage;
