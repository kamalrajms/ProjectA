import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  // ex 1
  useEffect(() => {
    console.log("Component mounted");
  }, [count]);
  //eg 2
  useEffect(() => {
    console.log(`Count changed to : ${count}`);
  }, [count]);
  return (
    <div>
      <h3>Hello</h3>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
}
