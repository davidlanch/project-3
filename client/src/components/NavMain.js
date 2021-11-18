import { NavLink } from "react-router-dom";
import React from "react";
import SignInButton from "./SignInButton";
import "./../styles/NavMain.css";
import { useAuth } from "./../auth/UserContext";
import IconSignOut from "./IconSignOut";
import ProfileMenu from "./ProfileMenu";


export default function NavMain() {
  const { isLoggedIn } = useAuth();
  const { currentUser } = useAuth();
  return (
    <nav id="nav_main" className="nav">
      <NavLink exact className="link logo" activeClassName="is-active" to="/">
        <img
          className="logo-fridge"
          src="./../../FridgeIcon.png"
          alt="fridge-logo"
        ></img>
        <img
          className="title-logo"
          src="./../../title-bon-app.png"
          alt="bon-app"
        />
      </NavLink>
      <NavLink
        className="link title"
        activeClassName="is-active"
        to={{pathname: "/all-recipes", reset: true}}

      >
        All Recipes
      </NavLink>

      {isLoggedIn === false && (
        <>
          <NavLink
            className="link signin"
            activeClassName="is-active"
            to="/sign-in"
          >
            <SignInButton />
          </NavLink>
        </>
      )}

      {isLoggedIn === true && (
        <>
        <ProfileMenu username={currentUser.username} avatar={currentUser.avatar}/>
        </>
      )}
    </nav>
  );
}
