import React from 'react';
//import { Link } from "react-router-dom";
import "./../styles/SignInButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'

export default function ProfileButton() {
    return (
        <div className="signin">
        <FontAwesomeIcon icon={faCarrot} className="fa" />
            <p>My profile</p>
        </div>



    )
}
