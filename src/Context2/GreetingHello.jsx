import React, { useContext } from "react";
import ContextButton from "./ContextButton";
import { Pass } from "../App";

export default function GreetingHello() {
  const { age, mode } = useContext(Pass);
  return (
    <div className={mode}>
      Welcome... back --{age}
      <ContextButton />
    </div>
  );
}
 