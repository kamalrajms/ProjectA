import React from "react";

export default function XOButton({value,onSquareClick}) {
  return (
    <button onClick={onSquareClick} style={{ padding: "16px" }}>
      {value}
    </button>
  );
}
