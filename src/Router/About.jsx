import React from "react";
import BasicAip from "../Component/BasicAip";
import CustomCounter from "../Component/CustomCounter";
import CustomProduct from "../Component/CustomProduct";
import XOGame from "../Game/XOGame";

export default function About() {
  return (
    <div>
      <h3>game</h3>
      <XOGame />
      <CustomProduct />
      <h3>custom hook</h3>
      <CustomCounter />
      <h1>About component</h1>
      <BasicAip />
    </div>
  );
}
