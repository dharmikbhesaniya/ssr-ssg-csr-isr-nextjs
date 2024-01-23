"use client";
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const click = () => {
    // setCount(count.valueOf++);
  };
  return (
    <div>
      <h1>client side</h1>
      <h3>Counter {count}</h3>
      <button onClick={click}>Increment</button>
    </div>
  );
};

export default Counter;
