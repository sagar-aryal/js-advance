import { useEffect, useState } from "react";
const useCountdown = ({ input, setMessage }) => {
  const [countdown, setCountdown] = useState("0");

  useEffect(() => {
    setCountdown(input);
  }, [input]);

  useEffect(() => {
    if (typeof countdown !== "number") {
      return;
    }
    if (countdown === 0) {
      setMessage(true);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((current) => current - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown, setMessage]);
  return [countdown];
};

export default useCountdown;
