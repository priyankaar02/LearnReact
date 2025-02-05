import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom react app</h1>
    </div>
  );
}

const AnotherApp = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);
createRoot(document.getElementById("root")).render(
  /*<MyApp />*/
  //AnotherApp
  //anotherReactElement
  <App />
);
