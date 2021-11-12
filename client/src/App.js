import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import OneRecipe from "./views/recipe"
import NavMain from "./components/NavMain";


function App() {
  return (
    <div className="App">
      <NavMain />
      <Route path="/all-recipes/:id" component={OneRecipe} />
    </div>
  );
}

export default App;
