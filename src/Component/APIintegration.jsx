import React, { useState, useEffect } from "react";

export default function APIintegration() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchuser() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchuser();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div>
      <h2>User List</h2>
      {user.map((person) => (
        <div
          key={person.id}
          style={{
            border: "1px solid #000",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{person.name}</h3>
          <h4>{person.email}</h4>
        </div>
      ))}
    </div>
  );
}
