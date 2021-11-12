import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import OneRecipe from "./views/recipe";
import NavMain from "./components/NavMain";
import NotFound from "./views/NotFound";
import Signin from "./views/SignIn";
import SignUp from "./views/SignUp";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { UserContextProvider } from "./auth/UserContext";
import Footer from "./components/Footer";
function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <NavMain />
        
        <Switch>
          <Route exact path="/" component={OneRecipe} />
          <Route path="/sign-in" component={Signin}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/dashboard" component={OneRecipe} />
          <Route path="/all-recipes" component={OneRecipe} />
          <Route path="*" component={NotFound} />
        </Switch>
</div>
    </UserContextProvider>
  );
}

export default App;
