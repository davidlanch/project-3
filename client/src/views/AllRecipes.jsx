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
      nameFilter: "all",
      ingredientFilter: [],
      categoryFilter: []
    };
  }

  componentDidMount() {
    this.fetchData({});
  }

  // Three functions handling the changes in the 3 parts of the filter

  onNameInput = (evt) => {
    this.setState({ nameFilter: evt.target.value }, () => {
      this.fetchData();
    });
    console.log("here we have the NEW NAME ", this.state.nameFilter)
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

  onIngredientInput = () => {

  }

//   componentDidUpdate = () => {
//     this.fetchData({
//         name: this.state.nameFilter,
//         category: this.state.categoryFilter
//     });
//   };


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
