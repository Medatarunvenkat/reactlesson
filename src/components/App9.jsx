import React, { useState } from "react";

export default function App9() {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>App9</h1>
      <h2>useState Revision</h2>
      <div >
        <button onClick={decrement}>-</button>
        <h3>{count}</h3>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}