import React, { Component } from 'react'
import APIHandler from '../api/handler';
import "./../styles/AllRecipes.css"
import SimpleCard from '../components/SimpleCard';

export default class AllRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: null };
      }
    
      componentDidMount() {
        APIHandler.get("/all-recipes")
        .then((response) => {
          this.setState({ recipes: response.data });
          console.log(response.data)
        })
    .catch((error) => console.error(error))}

    render() {
        if (!this.state.recipes) return <div>loading</div>
        return (
            <div className = "list-recipes">
                {this.state.recipes.map((element) => {
                    return (
                        <div key={element._id}>
                        <SimpleCard recipe= {element}></SimpleCard>
                        </div>
                    )
                })}
            </div>
        )
    }
}
