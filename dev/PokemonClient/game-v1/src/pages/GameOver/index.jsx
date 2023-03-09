import logo from '../../assets/images/pikachu-piplup.gif';
import styles from "./styles.module.css";


function GameOver() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} /*className="App-logo"*/ alt="logo" />
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
