import React, { useReducer } from "react";

export default function UseReducerHook2() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  function formReducer(state, action) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>Register form</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="enter email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={state.password}
        onChange={handleChange}
      />
    </div>
  );
}
