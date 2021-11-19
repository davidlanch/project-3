import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import OneRecipe from "./views/recipe";
import NavMain from "./components/NavMain";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Signin from "./views/SignIn";
import SignUp from "./views/SignUp";
//import { ProtectedRoute } from "./auth/ProtectedRoute";
import { UserContextProvider } from "./auth/UserContext";
import AllRecipes from "./views/AllRecipes";
import MyRecipes from "./views/MyRecipes";

import MyFavourites from "./views/MyFavourites"
// import { useAuth } from "../src/auth/UserContext";
import CreateForm from "./components/CreateForm.jsx"
import UpdateForm from "./components/UpdateForm.jsx"
import { ProtectedRoute} from "./auth/ProtectedRoute"

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
          <ProtectedRoute exact path="/profile/my-recipes" component={MyRecipes} />
          <ProtectedRoute path="/profile/my-recipes/create" component ={CreateForm} /> 
          <ProtectedRoute path="/profile/my-recipes/update/:id" component ={UpdateForm} />   
          <ProtectedRoute path="/profile/my-favourites" component={MyFavourites} />
          <Route path="/all-recipes/:id" component={OneRecipe} />
          <Route exact path="/all-recipes" component={AllRecipes} />
          <Route path="*" component={NotFound} />
        </Switch>
</div>
    </UserContextProvider>
  );
}

export default App;
