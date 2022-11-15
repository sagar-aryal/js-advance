import React from "react";
import { useState } from "react";

const App = () => {
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

export default App;

// React re-renders when state or props changed
// State => holds data that's required for our component // integer, string, object. array, boolean
// State changes UI after rendering
// useState hook => used for holding data for our state
// Always use prevValue with setter cos it's a async process and it might cause bug if we do in sync
