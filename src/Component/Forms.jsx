import React, { useState } from "react";

export default function Forms() {
  const [name, setName] = useState("");
  console.log(name);

  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>

      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="">Check box</label>
    </div>
  );
}
