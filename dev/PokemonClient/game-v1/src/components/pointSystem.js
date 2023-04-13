import React, { useState } from "react";

const PointSystem = () => {
  const [points, setPoints] = useState(0);

  const handlePoints = (pointsChange) => {
    setPoints(points + pointsChange);
  };

  return (
    <div>
      <h2>Points: {points}</h2>
    </div>
  );
};

export default PointSystem;
