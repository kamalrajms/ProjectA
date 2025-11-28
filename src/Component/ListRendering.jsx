import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "mango"];

  const users = [
    // { id: 1, name: "Sai" },
    // { id: 2, name: "Kumar" },
    // { id: 3, name: "Dhanu" },
  ];
//   console.log(users.length);

  return (
    <div>
      <h2>Fruits name</h2>
      <ul>
        {fruits.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>
      <h2>user data</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id}.{user.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>no user data</p>
      )}
    </div>
  );
}
