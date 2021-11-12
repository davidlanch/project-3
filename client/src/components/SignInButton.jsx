import React from 'react';
import { Link } from "react-router-dom";
import "./../styles/SignInButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function SignInButton() {
    return (
        <div className="signin">
        <FontAwesomeIcon icon={faUser} className="fa" />
            <p>Connexion</p>
        </div>



    )
}
