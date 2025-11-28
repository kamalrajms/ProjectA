import React from "react";

export default function ConditionalRendering() {
  const user = true;
  return (
    <div>
      {/* ternary operator */}
      {user ? <p>welcome Home</p> : <p>please login..!</p>}
      {/* logical operator */}
      {user && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim beatae
          amet aspernatur fugiat obcaecati voluptates aut totam mollitia
          nesciunt veritatis! Explicabo consectetur iusto eos sint vel eveniet
          assumenda earum excepturi.
        </p>
      )}
    </div>
  );
}
