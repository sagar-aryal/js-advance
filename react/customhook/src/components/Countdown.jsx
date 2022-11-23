import { useEffect, useState } from "react";
import Message from "./Message";

const Countdown = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (typeof count !== "number") {
      return;
    }
    if (count === 0) {
      setMessage(true);
    }

    const timer = setInterval(() => {
      setCount((current) => current - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <input
        type="text "
        placeholder="Enter a number..."
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <p>{count}</p>
      {message && count === 0 ? <Message /> : " "}
    </div>
  );
};

export default Countdown;
