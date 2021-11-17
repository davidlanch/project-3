import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// custom tools
import APIHandler from "./../api/handler.js";
import IconAvatarAdmin from "./../components/IconAvatarAdmin";
import { withAuth } from "./../auth/UserContext";
// styles
import "./../styles/form.css";
import "./../../src/styles/icon-avatar.css";

class Signup extends Component {
  state = {
    avatar: '',
    tmpAvatar: "",
    username: "admin",
    email: "admin@foobarbaz.io",
    password: "12345",
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
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImage = (e) => {
    // console.log("Signup@handle image", e.target.files[0]);
    this.setState({ avatar: e.target.files[0] }
    //   , () => {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     // when the fileREader ends  ...
    //     const baseString = reader.result; // get the image as a base64 encoded string
    //     this.setState({ tmpAvatar: baseString }); // set the tmp avatar as an image source before upload
    //   };
    //   reader.readAsDataURL(this.state.avatar); // read the file from the local disk
    // }
    );
  };

  

  render() 
  {
    console.log(this.props);
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
        {/* <label className="label" htmlFor="email">
          email
        </label> */}
        <input
          className="input"
          placeholder="email"
          id="email"
          type="email"
          name="email"
          defaultValue={email}
        />
        {/* <label className="label" htmlFor="username">
          username
        </label> */}
        <input
          className="input"
          placeholder="username"
          id="username"
          type="text"
          name="username"
          defaultValue={username}
        />
        {/* <label className="label" htmlFor="avatar">
          avatar
        </label> */}
        {/* <IconAvatarAdmin avatar={tmpAvatar} clbk={this.handleImage} /> */}
        {/* <label className="label" htmlFor="password">
          password
        </label> */}
        <input
          className="input"
          placeholder="password"
          id="password"
          type="password"
          name="password"
          defaultValue={password}
        />
        <div className="container"> 
        <label htmlFor="">Upload your avatar</label>
        <input
          ref={this.fileInput}
          type="file"
          name="avatar"
          id='avatar'
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
