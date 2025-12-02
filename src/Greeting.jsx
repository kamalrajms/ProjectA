import React from "react";
import Style from "./Greeting.module.css";

export default function Greeting({ firstName, number, native }) {
  return (
    <nav className={Style.greeting}>
      <h2 style={{ backgroundColor: "greenyellow", color: "black" }}>
        Hello world
      </h2>
      <p>
        {/* Goog morning {props.firstName} {props.number} */}
        {firstName} age {number} from {native}
      </p>
    </nav>
  );
}
