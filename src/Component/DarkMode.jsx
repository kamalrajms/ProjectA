import React, { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "25px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "light mode" : "dark mode"}{" "}
      </button>
      <p>You are in {dark ? "dark mode" : "light mode"} light mode</p>
    </div>
  );
}
