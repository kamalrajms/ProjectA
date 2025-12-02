import React, { useState } from "react";
import "./UseStateHook.css";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  console.log(count);

  const [user, setUser] = useState(true);

  return (
    <div className="usestate">
      <nav>
        {user ? <p>Welcome backe..</p> : <p>please login</p>}
        <button onClick={() => setUser(!user)}>
          {user ? "sign out" : "sign in"}
        </button>
      </nav>

      <h2>Count :{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
