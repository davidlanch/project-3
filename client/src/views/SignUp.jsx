import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// custom tools
import APIHandler from "./../api/handler.js";
//import IconAvatarAdmin from "./../components/IconAvatarAdmin";
import { withAuth } from "./../auth/UserContext";
// styles
import "./../styles/form.css";
import "./../../src/styles/icon-avatar.css";

class Signup extends Component {
  state = {
    avatar: '',
    tmpAvatar: "",
    username: "",
    email: "",
    password: "",
    isError: false
  };
  fileInput = React.createRef()
  
  handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    // create a form data (programatic form, to send the file as binary)
    fd.append("email", this.state.email);
    fd.append("password", this.state.password);
    fd.append("username", this.state.username);
    if (this.fileInput.current.files[0]) {
      fd.append('avatar', this.fileInput.current.files[0])
    }

    try {
      await APIHandler.post("/signup", fd);
      this.props.history.push("/sign-in");
    } catch (err) {
      console.error(err);
      this.setState({
        isError: true
      })
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImage = (e) => {
    this.setState({ avatar: e.target.files[0] }
    );
  };

  

  render() 
  {
    const { isLoggedIn } = this.props.userContext;
    const { email, password, username, tmpAvatar } = this.state;
    return isLoggedIn ? (
      // avoid the component to be rendered if user is already logged in
      <Redirect to="/all-recipes" />
    ) : (
      <form
        className="form"
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      >
        <h1 className="title">Sign up</h1>
        {this.state.isError === true && <div className="error">email already registered, please sign in</div>}
        <input
          className="input"
          placeholder="email"
          id="email"
          type="email"
          name="email"
          defaultValue={email}
        />
        <input
          className="input"
          placeholder="username"
          id="username"
          type="text"
          name="username"
          defaultValue={username}
        />
        <input
          className="input"
          placeholder="password"
          id="password"
          type="password"
          name="password"
          defaultValue={password}
        />
        <div className="container "> 
        <label htmlFor="">Upload your avatar</label>
        <input
          ref={this.fileInput}
          type="file"
          name="avatar"
          id='avatar'
          className="avatar"
          onChange={this.handleImage} 
        />
        </div>
        <button className="btn">ok</button>
        <p className="parag">
          Already a member ? please{" "}
          <Link to="/sign-in" className="linksign">
            sign in
          </Link>
        </p>
      </form>
    );
  }
}

export default withAuth(Signup);
