import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //let counter = 15;
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    // counter++;
    // console.log(counter);
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Learn React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
