import { NavLink } from "react-router-dom";
import React from 'react'
import SignInButton from "./SignInButton";

export default function NavMain() {
  return (
    <nav id="nav_main" className="nav">

      <NavLink exact className="link" activeClassName="is-active" to="/">
        <img src="./../../public/FridgeIcon.png" alt="fridge-logo"></img>
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
