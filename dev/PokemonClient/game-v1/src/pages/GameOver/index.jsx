import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/pikachu-piplup.gif';
import styles from "./styles.module.css";


function GameOver() {

  // redirects the user to the front page afte five seconds
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 5000);

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

export default GameOver;
