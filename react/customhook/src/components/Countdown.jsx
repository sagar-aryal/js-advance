import { useEffect, useState } from "react";
import Message from "./Message";

const Countdown = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof count !== "number") {
      return;
    }

    const timer = setInterval(() => {
      setCount((current) => current - 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <input
        type="text "
        placeholder="Enter a number..."
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <p>{count}</p>
    </div>
  );
};

export default Countdown;
