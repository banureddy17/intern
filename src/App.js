import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Intern from "./Components/Intern";

function App() {
  return (
    <div className="App">
      <Intern />
      <div className="all">
        <button> start selling</button>
        <button> customer service</button>
      </div>
    </div>
  );
}

export default App;
