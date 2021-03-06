import React, { useState } from "react";

import { Link, Redirect } from "react-router-dom";
// custom tools
import { useAuth } from "../auth/UserContext";
import APIHandler from "./../api/handler.js";
import "./../styles/form.css";

export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setCurrentUser } = useAuth();
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiRes = await APIHandler.post("/signin", { email, password });
      setCurrentUser(apiRes.data.currentUser);
      setIsError(false);
    } catch (err) {
      setCurrentUser(null);
      setIsError(true)
      // status, error
    }
  };

  return isLoggedIn ? (
    <Redirect to="/all-recipes" />
  ) : (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="title">Sign in</h1>
      {/* <label className="label" htmlFor="email">
        email
      </label> */}
      {isError === true && <div className="error title">invalid credentials</div>}
      <input
        className="input"
        placeholder="email"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <label className="label" htmlFor="password">
        password
      </label> */}
      <input
        className="input"
        placeholder="password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn">ok</button>
      <p className="parag">
        No account yet ? please{" "}
        <Link to="/signup" className="linksign">
          sign up
        </Link>
      </p>
    </form>
  );
}
