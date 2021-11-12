import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import OneRecipe from "./views/recipe"
import NavMain from "./components/NavMain";
import NotFound from "./views/NotFound"


function App() {
  return (
    <div className="App">
      <NavMain />
      <Recipes />
      <Switch>
        <Route to="/signin" ></Route>
        <Route path="/all-recipes/:id" component={OneRecipe} />
        <Route path="*" component={NotFound} />
      </Switch>
      
    </div>
  );
}

export default App;
