import React, { useState } from "react";

export default function MultipleForm() {
  const [form, setForm] = useState({
    name: "kumar",
    email: "",
    age: "",
  });
  const handleInput = (e) => {
    const {name,value}=e.target
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>Multiple Forms</h1>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Enter name"
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="Enter email"
        onChange={handleInput}
      />
      <input
        type="number"
        name="age"
        value={form.age}
        placeholder="Enter Age"
        onChange={handleInput}
      />
    </div>
  );
}
