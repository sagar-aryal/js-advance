import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  console.log("React re-renders when state or props changed.");

  const handleIncrease = () => {
    // setState("Sync Method"); // Bad Practice
    setState((prevValue) => {
      return prevValue + 1;
    });
  };

  const handleDecrease = () => {
    // setState("Sync Method"); // Bad Practice
    setState((prevValue) => {
      return prevValue - 1;
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleIncrease}>+</button>{" "}
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default Counter;
