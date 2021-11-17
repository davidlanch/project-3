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
    let ingredientParams = [""];
    if (typeof url.get('ingredients') === "string") ingredientParams = url.get('ingredients').split(',')
    console.log("yes here are the ingredient params: ", ingredientParams)
    
    // if we came from the details of one recipe, we want to display the same search as before
    // with props.location.searchFromOneRecipe
    let name = ""; 
    let categories = [];
    if (this.props.location.searchFromOneRecipe) {
      ingredientParams = this.props.location.searchFromOneRecipe.ingredients;
      name = this.props.location.searchFromOneRecipe.name;
      categories = this.props.location.searchFromOneRecipe.categories;
    }

    this.setState({ingredientFilter: ingredientParams, nameFilter: name, categoryFilter: categories}, () => this.fetchData())
    
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
        })
        .catch((err) => console.error(err))
  };

  render() {
    console.log("these are the recipes on all recipes", this.state.recipes)
    if (!this.state.recipes) return <div>Loading...</div>;
    return (
      <>
        <FilterMenu
          onNameInput={this.onNameInput}
          onCategoryInput={this.onCategoryInput}
          onIngredientInput={this.onIngredientInput}
          ingredientsFromHome={this.state.ingredientFilter}
        />
       
        {
          this.state.recipes.length ?

          <div className="list-recipes">
            {this.state.recipes.map((element) => {
              return (
                <div key={element._id}>
                  <SimpleCard previousSearchParams={
                      {name: this.state.nameFilter,
                      ingredients: this.state.ingredientFilter,
                      category: this.state.categoryFilter}
                    } recipe={element}>
                    </SimpleCard>
                </div>
              );
            })}
          </div>

          : <div>
            <p>There are no recipes matching these criteria</p>
              <i className="far fa-times-circle"></i>           
            </div>
        }
      </>
    );
  }
}