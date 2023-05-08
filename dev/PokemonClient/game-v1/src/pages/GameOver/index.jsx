import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/pikachu-piplup.gif';
import styles from './styles.module.css';
import { useLocation } from "react-router-dom";
import { useState } from 'react';


function GameOver() {
  const location = useLocation();
  const [points,setPoints] = useState(location.state.points);

  // redirects the user to the front page afte five seconds
  const navigate = useNavigate();
  const NavigateFunction = () =>{
    setPoints(0);
    navigate('/');
  }

  return (
    <div className={styles.ending_page}>
     
      <h1 className={styles.game_over_text}>Game Over!</h1>
      <p className={styles.total_points_text}>Total points: </p>
      <p className={styles.great_score_text}>Great score! Another game?</p>
      <div className={styles.button_container}>
        <button className={styles.home_button} onClick={NavigateFunction}>Home</button>
      </div>
      <h1 className={styles.game_over_text}>Points: {points}</h1>
    </div>
  );
}

export default GameOver;
