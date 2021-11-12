import { NavLink } from "react-router-dom";
import React from 'react'
import SignInButton from "./SignInButton";
import './../styles/NavMain.css'

export default function NavMain() {
  return (
    <nav id="nav_main" className="nav">
    
      <NavLink exact className="link logo" activeClassName="is-active" to="/">
        
        <img className="logo-fridge" src="./../../FridgeIcon.png" alt="fridge-logo"></img>
        <img className="title-logo"src="./../../title-bon-app.png" alt="bon-app" />
      </NavLink>
      <NavLink className="link title" activeClassName="is-active" to="/all-recipes">
        All Recipes
      </NavLink>
      
      <NavLink className="link signin" activeClassName="is-active" to="/sign-in">
        <SignInButton/>
      </NavLink>
      
    </nav>
  );
}
