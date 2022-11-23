import { useState } from "react";
import useCountdown from "../hooks/useCountdown";
import Message from "./Message";

const Countdown = () => {
  const [input, setInput] = useState("0");
  const [message, setMessage] = useState(false);

  const [countdown] = useCountdown({ input, setMessage });

  return (
    <div>
      <input
        type="text "
        placeholder="Enter a number..."
        onChange={(e) => setInput(parseInt(e.target.value))}
      />
      <p>{countdown}</p>
      {message && countdown === 0 ? <Message /> : " "}
    </div>
  );
};

export default Countdown;
