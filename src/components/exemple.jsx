import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });

  return (
    <div>
      <p>vous avez cliqué {count} fois </p>
      <button onClick={() => setCount(count + 1)}>click here</button>
    </div>
  );
}

export default Example;