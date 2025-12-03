import React from "react";
import Greeting from "./Greeting";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";
import ObjectWayStyle from "./Component/ObjectWayStyle";
import DarkMode from "./Component/DarkMode";
import Forms from "./Component/Forms";
import MultipleForm from "./Component/MultipleForm";
import ConditionForm from "./Component/ConditionForm";

export default function App() {
  const name = "kumar";
  const age = 22;
  const city = "chennai";

  return (
    <div>
      <ConditionForm />
      <MultipleForm />
      <Forms />
      <DarkMode />
      <ObjectWayStyle />
      <UseStateHook />
      <ListRendering />
      <ConditionalRendering />
      <h2>First class</h2>
      <Greeting firstName={name} number={age} native={city} />
      <Greeting firstName={name} number={age} native={city} />

      <h3>Name:{name}</h3>
    </div>
  );
}
