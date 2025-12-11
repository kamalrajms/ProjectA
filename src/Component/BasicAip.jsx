import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

export default function BasicAip() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h1>User detailes</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/blog/:${user.id}`}>
              {" "}
              {user.id}.{user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
