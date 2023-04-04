import React from 'react';
import './getEndingPage.css';

const EndingPage = () => {
  return (
    <div className="ending-page">
      <h1 className="game-over-text">Game Over!</h1>
      <p className="total-points-text">Total points: </p>
      <p className="great-score-text">Great score! Another game?</p>
      <div className="button-container">
        <button className="home-button">Home</button>
        <button className="play-again-button">Play Again</button>
      </div>
    </div>
  );
}

export default EndingPage;