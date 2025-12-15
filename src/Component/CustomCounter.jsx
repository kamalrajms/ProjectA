import React from "react";
import useCounter from "./useCounter";

export default function CustomCounter() {
  let { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={increment}>incerement</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
