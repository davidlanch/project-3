import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import OneRecipe from "./views/recipe";
import NavMain from "./components/NavMain";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Signin from "./views/SignIn";
import SignUp from "./views/SignUp";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { UserContextProvider } from "./auth/UserContext";
import Footer from "./components/Footer";
import AllRecipes from "./views/AllRecipes";
import MyRecipes from "./views/MyRecipes";
import MyProfile from "./views/MyProfile"
import MyFavourites from "./views/MyFavourites"
// import { useAuth } from "../src/auth/UserContext";
import CreateForm from "./components/CreateForm.jsx"

function App() {
  // const { isLoggedIn } = useAuth();
  // const { currentUser } = useAuth();
  return (
    <UserContextProvider>
      <div className="App">
        <NavMain />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={Signin}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route exact path="/profile/my-recipes" component={MyRecipes} />
          <Route path="/profile/my-recipes/create" component ={CreateForm} />   
          <Route path="/profile/my-profile" component={MyProfile} />
          <Route path="/profile/my-favourites" component={MyFavourites} />
          <Route path="/all-recipes/:id" component={OneRecipe} />
          <Route path="/all-recipes" component={AllRecipes} />
          <Route path="*" component={NotFound} />
        </Switch>
</div>
    </UserContextProvider>
  );
}

export default App;
