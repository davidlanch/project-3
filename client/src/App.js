import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavMain from "./components/NavMain";

function App() {
  return (
    <div className="App">
      <NavMain />
    </div>
  );
}

export default App;
