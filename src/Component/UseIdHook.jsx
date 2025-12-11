import React, { useId } from "react";

export default function UseIdHook() {
  const name = useId();
  console.log(name);
  const email = useId();
  console.log(email);

  return (
    <div>
      <label htmlFor={name}>Name</label>
      <input type="text" id={name} />

      <label htmlFor={`${email}-email`}>email</label>
      <input type="text" id={`${email}-email`} />
    </div>
  );
}
