import React, { useState, useEffect } from "react";
import StopWatchTimer from "../Component/StopWatchTimer";
import { useNavigate } from "react-router-dom";
import APIintegration from "../Component/APIintegration";

export default function Home() {
  const page = useNavigate();
  const transfer = useNavigate();

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 5) {
      transfer("/Contact");
    }
  }, [count]);
  return (
    <div>
      
      <APIintegration />
      <h1>Home component</h1>
      <StopWatchTimer />
      <button onClick={() => page("/Service")}>Move to Service</button>

      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>move to Contact</button>
    </div>
  );
}
