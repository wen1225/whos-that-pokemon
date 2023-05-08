import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
//import './pointSystem.css';

function PointSystem(props) {
  const{isCorrect, hintCount, roundCounter} = props;
  const [points, setPoints] = useState(0);

  
  useEffect(() =>{
    if(isCorrect == true){
      setPoints(points + 500 - (100*hintCount))
    }
  },[isCorrect]);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (roundCounter === 6) {
      navigate("/gameover", { state: { points: points } });
    }
  })
  
  

  return (
   <div style={{ position: "absolute", top: "80%", left: "20%", transform: "translate(-50%, -50%)", zIndex: "1" }}>
      <h2>Points: {points} </h2>
      
    </div>
  );
}

export default PointSystem;
