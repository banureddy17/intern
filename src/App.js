import React from "react";
import "./App.css";

import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <div className="all">
        <button> start selling</button>
        <button> customer service</button>
      </div>
    </div>
  );
}

export default App;
