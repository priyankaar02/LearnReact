import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [splCharAllowed, setSplCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy"); // New state for button text
  const passwordSelect = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (splCharAllowed) str += "!@#$%&*()_+";

    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * str.length + 1);
      // console.log(`Random Number at index: ${i} => ${randomNumber}`);
      // console.log(
      //   `Character at ${randomNumber} => ${str.charAt(randomNumber)}`
      // );
      pass += str.charAt(randomNumber);
      // console.log(`password at random no ${randomNumber} => ${pass}`);
    }
    setPassword(pass);
  }, [length, numberAllowed, splCharAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, splCharAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordSelect.current.select(); // Highlight password generated
    //passwordSelect.current.setSelectionRange(0, 9999); // Ensure full selection (for mobile)

    setCopyButtonText("Copied!"); // Change button text to "Copied!"

    setTimeout(() => {
      setCopyButtonText("Copy"); // Revert back after 10 seconds
    }, 10000);
  };

  return (
    <>
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
            ref={passwordSelect}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0"
          >
            {copyButtonText}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                console.log(`The length is ${e.target.value}`);
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={splCharAllowed}
              onChange={() => {
                setSplCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="character">Special character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
