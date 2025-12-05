import React, { useState, useEffect } from "react";

export default function UseEffectTimer() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Seconds: {sec}</h1>
    </div>
  );
}
