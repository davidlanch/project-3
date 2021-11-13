import React, { Component } from "react";
import "./../styles/ProfileMenu.css";
import { Link } from "react-router-dom";
import IconSignOut from "./IconSignOut";
import ProfileButton from "./ProfileButton";
import "./../styles/SignInButton.css";
import { useAuth } from "./../auth/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot, fas, faSortDown } from "@fortawesome/free-solid-svg-icons";

export default class ProfileMenu extends Component {
  state = {
    showProfileMenu: true,
  };

  toggleProfileMenu = () => {
    this.setState({
      showProfileMenu: !this.state.showProfileMenu,
    });
  };
  render() {
    return (
      <div className="connected-menu">
        <div className="signin" onClick={() => this.toggleProfileMenu()}>
          <FontAwesomeIcon icon={faCarrot} className="fa" />
          <p>My profile</p>
          <FontAwesomeIcon icon={faSortDown} className="fa" />
        </div>
        {/* <ProfileButton onClick={() => this.toggleAddForm()}/> */}
        {!this.state.showProfileMenu && (
          <div className="hidden-menu">
            <Link className="link" to="/profile/my-recipes">My recipes</Link>
            <Link className="link" to="/profile/my-favourites">My favourites</Link>
            <Link  className="link" to="/profile/my-profile">My profile</Link>
            <IconSignOut className="link signin" />
          </div>
        )}
      </div>
    );
  }
}
