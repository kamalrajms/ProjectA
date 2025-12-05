import React, { useState, useEffect } from "react";

export default function StopWatchTimer() {
  const [sec, setSec] = useState(0);
  const [IsRunnig, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (IsRunnig) {
      intervalId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [IsRunnig]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleresert = () => {
    setSec(0);
    setIsRunning(false);
  };
  return (
    <div>
      <h3>Timer : {sec}</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleresert}>Reset</button>
      </div>
    </div>
  );
}
