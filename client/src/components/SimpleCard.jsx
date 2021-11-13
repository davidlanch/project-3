import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./../styles/SimpleCard.css"

export default class SimpleCard extends Component {
    render() {
        return (
            <div className="simple-card">
            <Link to={"/all-recipes/" + this.props.recipe._id} className="link">
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
