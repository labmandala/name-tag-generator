import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";
import { names } from "./data.js";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Sarah" />
    <NameTag name="Jeff" />
    <NameTag name="William" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
