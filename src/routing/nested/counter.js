import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter} disabled={count === 0}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
