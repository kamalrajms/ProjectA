import React from "react";

export default function Greeting({ firstName, number, native }) {
  return (
    <nav>
      <h2>Hello world</h2>
      <p>
        {/* Goog morning {props.firstName} {props.number} */}
        {firstName} age {number} from {native}
      </p>

    </nav>
  );
}
