import React, { useReducer, useState } from "react";

export default function UseReducerHook() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  //    const[states,setStates]=useState(initialState)
  //    const[states,setStates]=useState({count:0})
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count:{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "resert" })}>Reset</button>
    </div>
  );
}
