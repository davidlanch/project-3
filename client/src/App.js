import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Recipe from "./views/recipe"
import NavMain from "./components/NavMain";
import Recipes from "./views/recipe";
import NotFound from "./views/NotFound"

function App() {
  return (
    <div className="App">
      <NavMain />
      <Recipes />
      <Switch>
        <Route to="/signin" ></Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
