import React, { useState } from 'react';

const ColorBox = ({ initialColor = "#000000", colorOptions = ["#ff0000", "#00ff00", "#0000ff"] }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    setColor(colorOptions[Math.floor(Math.random() * colorOptions.length)]);
  };

  return (
    <div>
      <div style={{ width: "100px", height: "100px", backgroundColor: color }}></div>
      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
};

export default ColorBox;
