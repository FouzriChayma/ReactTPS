import React, { useState } from 'react';

const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <h2>Compteur: {count}</h2>
      <button onClick={() => setCount(count + step)}>+{step}</button>
      <button onClick={() => setCount(count - step)}>-{step}</button>
      <button onClick={reset}>Resss</button> 
    </div>
  );
};

export default Counter;
