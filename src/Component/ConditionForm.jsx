import React, { useState } from "react";

export default function ConditionForm() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    term: false,
  });
  const [error, seterror] = useState("");

  const handleInput = (e) => {
    const { name, type, value, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    if (!form.userName || !form.email || !form.password) {
      seterror("All fields are required");
      return;
    }
    console.log("hello222");
    if (!form.term) {
      seterror("Accept the check box");
      return;
    }

    seterror("");
    alert("form is submitted successfully");
    console.log(form);
  };

  return (
    <div>
      <h2>Reg -- form</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={form.userName}
          placeholder="enter name "
          onChange={handleInput}
        />
        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="enter email"
          onChange={handleInput}
        />
        <input
          type="text"
          name="password"
          value={form.password}
          placeholder="enter pasword"
          onChange={handleInput}
        />
        <input
          name="term"
          type="checkbox"
          checked={form.term}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
