import React from "react";
import { Pass } from "../App";
import { useContext } from "react";

export default function ContextButton() {
  const { mode, setMode } = useContext(Pass);
  console.log(mode);

  return (
    <button onClick={() => setMode(mode === "light" ? "black" : "light")}>
      Switch
    </button>
  );
}
