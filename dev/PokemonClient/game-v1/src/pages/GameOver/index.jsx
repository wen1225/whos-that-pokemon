import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/pikachu-piplup.gif';
import styles from './styles.module.css';


function GameOver() {

  // redirects the user to the front page afte five seconds
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 5000);

  return (
    <div className={styles.ending_page}>
      <h1 className={styles.game_over_text}>Game Over!</h1>
      <p className={styles.total_points_text}>Total points: </p>
      <p className={styles.great_score_text}>Great score! Another game?</p>
      <div className={styles.button_container}>
        <button className={styles.home_button}>Home</button>
        <button className={styles.play_again_button}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOver;
