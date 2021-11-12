import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Recipe from "./views/recipe"
import NavMain from "./components/NavMain";
import Recipes from "./views/recipe"

function App() {
  return (
    <div className="App">
      <NavMain />
      <Recipes />
    </div>
  );
}

export default App;
