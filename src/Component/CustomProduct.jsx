import React from "react";
import useFetch from "./useFetch";

export default function CustomProduct() {
  let {
    data: users,
    error,
    loading,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading....!</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div>
      <h4>customer detailes</h4>
      {users.map((person) => (
        <div>{person.name}</div>
      ))}
    </div>
  );
}
