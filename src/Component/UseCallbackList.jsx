import React, { useState, useEffect } from "react";

export default function UseCallbackList({ getItems }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(getItems());
    console.log("updating items");
  }, [getItems]);
  return (
    <div>
      {item.map((num) => (
        <div key={num}>{num}</div>
      ))}
    </div>
  );
}
