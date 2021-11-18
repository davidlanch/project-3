import React, { Component } from "react";
import APIHandler from "../api/handler.js";
import { withAuth } from "../auth/UserContext.js";
import "./../styles/createForm.css";
import { useAuth } from "./../auth/UserContext";

class Updateform extends Component {
  // using the constructor form to associate a ref
  constructor(props) {
    console.log(props);
    super(props); // MANDATORY !!!!
    this.state = {
      title: "",
      author: this.props.userContext.currentUser._id,
      difficulty: "",
      ingredient: "",
      ingredients: [],
      quantities: [],
      quantity: "",
      category: "",
      instructions: "",
      image: "",
      imageInput: React.createRef(), // create a reference to attach to the virtual DOM
    };
  }

  componentDidMount = async () => {
    try {
      const recipeInfo = await APIHandler.get(
        "/all-recipes/" + this.props.match.params.id
      );
      console.log("hoaoaoaoao", recipeInfo);
      this.setState({
        title: recipeInfo.data.title,
        difficulty: recipeInfo.data.difficulty,
        ingredient: recipeInfo.data.ingredient,
        ingredients: recipeInfo.data.ingredients,
        quantities: recipeInfo.data.quantities,
        quantity: recipeInfo.data.quantity,
        category: recipeInfo.data.category,
        instructions: recipeInfo.data.instructions,
        image: recipeInfo.data.image,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault(); // prevent the form to reload
    // destructuring the state
    const {
      title,
      author,
      difficulty,
      ingredients,
      category,
      quantities,
      instructions,
      image,
    } = this.state;
    // accessing the image out of the ref
    // const file = this.state.image;
    // console.log("this is file",file)// target the image file associated to the input[type=file]
    const uploadData = new FormData(); // create a form data => an object to send as post body

    const finalImage = this.state.imageInput.current.files[0] || image;

    // appending the keys / values pairs to the FormData
    uploadData.append("title", title); // create a key [name] on the formDate
    uploadData.append("difficulty", difficulty); // create a key [age] on the formDate
    uploadData.append("ingredients", ingredients); // create a key [color] on the formDate
    uploadData.append("quantities", quantities);
    uploadData.append("category", category);
    uploadData.append("instructions", instructions);
    uploadData.append("image", finalImage);

    try {
      await APIHandler.patch(
        "/recipe/update/" + this.props.match.params.id,
        uploadData
      );
      this.props.history.push("/profile/my-recipes");
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addIngredientBar = (e) => {
    console.log("you are", e);
    e.preventDefault();
    let newIngredients = [...this.state.ingredients];
    let newQuantities = [...this.state.quantities];
    newIngredients.push(this.state.ingredient);
    newQuantities.push(this.state.quantity);

    this.setState({
      ingredients: newIngredients,
      ingredient: "",
      quantities: newQuantities,
      quantity: "",
    });
  };

  removeIngredientBar = (e, index) => {
    e.preventDefault();
    const deleteIngredient = [...this.state.ingredients];
    const deleteQuantities = [...this.state.quantities]
    console.log("avant", deleteIngredient)
    console.log("index", index)
    deleteIngredient.splice(index, 1);
    deleteQuantities.splice(index,1)
    console.log("apres", deleteIngredient)
    this.setState({
      ingredients: deleteIngredient,
      quantities: deleteQuantities,
    });
  };

  render() {
    console.log("this is the ingrdients", this.props.match.params.id);
    console.log("state", this.state);
    return (
      <>
        <form>
          <h1>Update your recipe!</h1>
          <input
            name="title"
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <select
            name="difficulty"
            value={this.state.difficulty}
            onChange={this.handleChange}
            className="input"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">difficult</option>
          </select>

          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            className="input"
          >
            <option value="Meat">Meat</option>
            <option value="Dessert">Dessert</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Pasta">Pasta</option>
            <option value="Seafood">Seafood</option>
            <option value="Side">Side</option>
            <option value="Starter">Starter</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Breakfast">Breakfast</option>
          </select>

          <input
            name="ingredient"
            type="text"
            placeholder="ingredients"
            value={this.state.ingredient}
            onChange={this.handleChange}
          />
          <input
            name="quantity"
            type="text"
            placeholder="quantities"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <input
            name="instructions"
            type="text"
            placeholder="instructions"
            value={this.state.instructions}
            onChange={this.handleChange}
          />

          <button onClick={this.addIngredientBar}>+</button>

          {/* THE REF IS HERE */}
          <input ref={this.state.imageInput} name="image" type="file" />
          <button onClick={this.handleSubmit}>ok</button>
        </form>

        <div>
          <h1>information</h1>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Ingredient</th>
                <th>Quantity</th>
              </tr>
              {this.state.ingredients.map((element, i) => {
                return (
                  <tr>
                    <td key={i}>{element}</td>
                    <td>{this.state.quantities[i]}</td>
                    <button
                      onClick={(evt) =>
                        this.removeIngredientBar(evt, i)
                      }
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default withAuth(Updateform);
