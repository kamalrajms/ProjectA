import React, { useState } from "react";
import XOButton from "./XOButton";

export default function XOGame() {
  const [Xnext, setXnest] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (square[i]) {
      return;
    }
    const nextSquare = square.slice();
    if (Xnext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }
    setSquare(nextSquare);
    setXnest(!Xnext);
  }

  return (
    <div>
      <div>
        <XOButton value={square[0]} onSquareClick={() => handleClick(0)} />
        <XOButton value={square[1]} onSquareClick={() => handleClick(1)} />
        <XOButton value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <XOButton value={square[3]} onSquareClick={() => handleClick(3)} />
        <XOButton value={square[4]} onSquareClick={() => handleClick(4)} />
        <XOButton value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <XOButton value={square[6]} onSquareClick={() => handleClick(6)} />
        <XOButton value={square[7]} onSquareClick={() => handleClick(7)} />
        <XOButton value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
