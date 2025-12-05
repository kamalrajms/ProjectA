import React, { useState, useEffect } from "react";

export default function APIuseeffect() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h1>User List</h1>

      <ul>
        {users.map((person) => (
          <li key={person.id}>
            {person.id}--{person.name}---{person.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// users=[{},{},{}......]

// map

// person={
//     id:1
// }
