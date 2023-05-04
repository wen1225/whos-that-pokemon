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
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Game Over Trainer.
        </p>
        <a
          className="App-link"
          href="https://github.com/wen1225/whos-that-pokemon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thank you for playing!
        </a>
      </header>
    </div>
  );
}

export default GameOver;
