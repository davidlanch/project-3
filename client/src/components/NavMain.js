import { NavLink } from "react-router-dom";
import React from 'react'
import SignInButton from "./SignInButton";
import './../styles/NavMain.css'

export default function NavMain() {
  return (
    <nav id="nav_main" className="nav">
      <NavLink exact className="link" activeClassName="is-active" to="/">
        <img className="logo-fridge" src="./../../FridgeIcon.png" alt="fridge-logo"></img>
      </NavLink>
      <NavLink className="link" activeClassName="is-active" to="/all-recipes">
        All Recipes
      </NavLink>
      <NavLink className="link" activeClassName="is-active" to="/sign-in">
        <SignInButton/>
      </NavLink>
    </nav>
  );
}
