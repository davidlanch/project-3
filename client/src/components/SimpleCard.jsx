import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./../styles/SimpleCard.css";
import Favorite from './Favorite';
import { useAuth } from "./../auth/UserContext";
import { withAuth } from './../auth/UserContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartbeat } from "@fortawesome/free-solid-svg-icons";


class SimpleCard extends Component {
    render() 
    {
        console.log(this.props.userContext.isLoggedIn)

        return (
            <div className="simple-card">

            {/* {this.props.userContext.isLoggedIn === true && (<Favorite handler={this.props.handler} id={this.props.recipe._id}/>)} */}
            {this.props.userContext.isLoggedIn === false && (<Link to="/sign-in"><i className="far fa-heart"></i></Link>)}

            <Link to={{pathname:"/all-recipes/" + this.props.recipe._id, previousSearchParams: this.props.previousSearchParams}} className="link">
            <div className="image-recipe">
            

            <img src={this.props.recipe.image}  alt="photo-recioe" />
            </div>
                <h1 className="title-simple-card">{this.props.recipe.title}</h1>
                </Link>
                <p className= "title-difficulty"><i>{this.props.recipe.difficulty}</i></p>
                
            </div>
        )
    }
}

export default withAuth(SimpleCard)
