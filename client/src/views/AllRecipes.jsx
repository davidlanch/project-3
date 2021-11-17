import React, { Component } from "react";
import APIHandler from "../api/handler";
import "./../styles/AllRecipes.css";
import SimpleCard from "../components/SimpleCard";
import FilterMenu from "../components/FilterMenu";

export default class AllRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
      nameFilter: null,
      ingredientFilter: [],
      categoryFilter: []
    };
  }

  componentDidMount() {
    // if we came from Home, we have to use the location parameters
    const url = new URLSearchParams(this.props.location.search)
    let ingredientParams = [];
    if (typeof url === 'String' && url.includes("'")) ingredientParams = url.get('ingredients').split(',')
    console.log("yes here are the ingredient params: ", ingredientParams)
    
    // const ingredientParams = this.props.location
    this.setState({ingredientFilter: ingredientParams}, () => this.fetchData())
    
  }

  // Three functions handling the changes in the 3 parts of the filter

  onNameInput = (evt) => {
    this.setState({ nameFilter: evt.target.value }, () => {
      this.fetchData();
    });
  };

  onCategoryInput = (evt, newCategory) => {
    let updatedCategories = [...this.state.categoryFilter];
    if (this.state.categoryFilter.includes(newCategory)) {
      updatedCategories.splice(updatedCategories.indexOf(newCategory), 1);
    } else {
      updatedCategories.push(newCategory);
    }
    this.setState({categoryFilter: updatedCategories}, () => {
        this.fetchData();
    })
  }

  onIngredientInput = (ingredients) => {
    this.setState({ ingredientFilter: [...ingredients] }, () => {
      console.log("my ingredients", this.state.ingredientFilter)
      this.fetchData();
    });
  }

  // The function calls the API to get the data corresponding to the 3 filters
  fetchData = () => {
    console.log("i did your fucking search ok this is not on me i'm a good function")
    console.log("i used this data that you gave me", this.state.ingredientFilter)
    APIHandler
        .get("/all-recipes", {
            params: {
                name: this.state.nameFilter,
                category: this.state.categoryFilter,
                ingredients: this.state.ingredientFilter
            },
        })
        .then((response) => {
            this.setState({ recipes: response.data });
            console.log("i have fetched(?) this data: ", response.data)
        })
        .catch((err) => console.error(err))
  };

  

  render() {
    if (!this.state.recipes) return <div>Loading...</div>;
    return (
      <>
        <FilterMenu
          onNameInput={this.onNameInput}
          onCategoryInput={this.onCategoryInput}
          onIngredientInput={this.onIngredientInput}
          ingredientsFromHome={this.state.ingredientFilter}
        />
        <div className="list-recipes">
          {this.state.recipes.map((element) => {
            return (
              <div key={element._id}>
                <SimpleCard recipe={element}></SimpleCard>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
