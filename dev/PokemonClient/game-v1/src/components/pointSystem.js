import React, { useState } from "react";
//import './pointSystem.css';

function PointSystem(props) {
  const { points, handlePoints } = props; 
  return (
    <div>
      <h2>Points: {points}</h2>
    </div>
  );
}

export default PointSystem;
