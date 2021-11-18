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
      categoryFilter: [],
      searchString: ""
    };
  }

  componentDidMount() {
    let reset = this.props.location?.reset || false;
    // if we came from Home, we have to use the location parameters
    const url = new URLSearchParams(this.props.location.search)
    let ingredientParams = [""];
    if (typeof url.get('ingredients') === "string") ingredientParams = url.get('ingredients').split(',')
    
    // if we came from the details of one recipe, we want to display the same search as before
    // with props.location.searchFromOneRecipe
    let name = ""; 
    let categories = [];
    if (this.props.location.searchFromOneRecipe) {
      ingredientParams = this.props.location.searchFromOneRecipe.ingredients;
      name = this.props.location.searchFromOneRecipe.name;
      categories = this.props.location.searchFromOneRecipe.category;
    }

    this.setState({ingredientFilter: ingredientParams, nameFilter: name, categoryFilter: categories}, () => this.fetchData())
    
  }

  componentDidUpdate (prevProps) {
    // If the user clicked on All recipes, we need to reset all parameters of the search to empty

    if (prevProps === this.props) return
    console.log("this props location is", this.props.location)
    if (this.props.location?.reset) {
      this.setState({
        ingredientFilter: [""], 
        nameFilter: "", 
        categoryFilter: []
      }, () => this.fetchData())
      this.props.location.reset = false;
      console.log("ok i get that you are trying to reset")
  }
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
    if (!this.state.recipes) return <div>Loading...</div>;
    return (
      <>
        <FilterMenu
          onNameInput={this.onNameInput}
          onCategoryInput={this.onCategoryInput}
          onIngredientInput={this.onIngredientInput}
          ingredientsFromHome={this.state.ingredientFilter}
          state={this.state}

        />
       
        {
          this.state.recipes.length ?

          <div className="list-recipes">
            {this.state.recipes.map((element) => {
              return (
                <div key={element._id}>
                  <SimpleCard 
                    previousSearchParams={
                      {name: this.state.nameFilter,
                      ingredients: this.state.ingredientFilter,
                      category: this.state.categoryFilter}
                    } 
                    recipe={element}
                    showLinks={true}>
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