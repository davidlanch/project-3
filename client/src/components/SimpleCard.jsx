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
            <div className="favorite">
            {this.props.userContext.isLoggedIn === true && (<Favorite handler={this.props.handler} id={this.props.recipe._id}/>)}
            {this.props.userContext.isLoggedIn === false && (<Link to="/sign-in" className="isNotFavorite"><FontAwesomeIcon className="coeur-plein" icon={faHeart} size="2x" color="#d18110" /><i className="far fa-heart coeur-vide fa-2x"></i></Link>)}
</div>

 
           
            {/* {this.props.userContext.isLoggedIn === true && (<Favorite handler={this.props.handler} id={this.props.recipe._id}/>)} */}
       

            <Link to={{pathname:"/all-recipes/" + this.props.recipe._id, state: {...this.props.previousSearchParams, showLinks: this.props.showLinks}}} className="link">
           
            

            <img src={this.props.recipe.image}  alt="photo-recipe" />
                <h1 className="title-simple-card">{this.props.recipe.title}</h1>
               
                <p className= "title-difficulty"><i>{this.props.recipe.category}</i></p>
                </Link>
                </div>
            
        )
    }
}

export default withAuth(SimpleCard)
