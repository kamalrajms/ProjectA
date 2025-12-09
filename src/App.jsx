import React, { useContext, createContext, useState } from "react";
import Greeting from "./Greeting";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";
import ObjectWayStyle from "./Component/ObjectWayStyle";
import DarkMode from "./Component/DarkMode";
import Forms from "./Component/Forms";
import MultipleForm from "./Component/MultipleForm";
import ConditionForm from "./Component/ConditionForm";
import UseEffectHook from "./Component/UseEffectHook";
import UseEffectTimer from "./Component/UseEffectTimer";
import StopWatchTimer from "./Component/StopWatchTimer";
import APIuseeffect from "./Component/APIuseeffect";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";
import GreetingHello from "./Context2/GreetingHello";
import UseReducerHook from "./Component/UseReducerHook";
import UseReducerHook2 from "./Component/UseReducerHook2";
import UceCallback from "./Component/UceCallback";

export const Pass = createContext();

export default function App() {
  const name = "kumar";
  const age = 22;
  const city = "chennai";

  const [mode, setMode] = useState("light");

  return (
    <div>
      <UceCallback />
      <UseReducerHook2 />
      <UseReducerHook />
      <Pass.Provider value={{ mode, setMode, age }}>
        <GreetingHello />
      </Pass.Provider>

      <div style={{ border: "2px solid black", padding: "20px" }}>
        App component -- {name}
        <Pass.Provider value={name}>
          <First />
        </Pass.Provider>
      </div>
      <UseRefHook />
      <APIuseeffect />
      <StopWatchTimer />
      <UseEffectTimer />
      <UseEffectHook />
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
