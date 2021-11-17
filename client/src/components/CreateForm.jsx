import React, { Component } from "react";
import APIHandler from "../api/handler.js";
import { withAuth } from "../auth/UserContext.js";
import "./../styles/createForm.css"


class CreateForm extends Component {
  // using the constructor form to associate a ref
  constructor(props) {
    console.log(props);
    super(props); // MANDATORY !!!!
    this.state = {
      title: "",
      author: "",
      difficulty: "easy",
      ingredient: "",
      ingredients: [],
      quantities: [],
      quantity: "",
      category:"",
      instructions:"",
      image: React.createRef(), // create a reference to attach to the virtual DOM
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault(); // prevent the form to reload
    // destructuring the state
    const { title, difficulty, ingredients, quantities } = this.state;
    // accessing the image out of the ref
    const file = this.state.image.current.files[0]; // target the image file associated to the input[type=file]
    const user = this.props.userContext.currentUser._id;
    console.log("this is user", user);
    const uploadData = new FormData(); // create a form data => an object to send as post body

    // appending the keys / values pairs to the FormData
    uploadData.append("title", title); // create a key [name] on the formDate
    uploadData.append("difficulty", difficulty); // create a key [age] on the formDate
    uploadData.append("ingredients", ingredients); // create a key [color] on the formDate
    uploadData.append("quantities", quantities);
    uploadData.append("image", file);
    uploadData.append("author", user);
    try {
      await APIHandler.post("/recipe/create", uploadData);
      this.props.history.push("./")
      console.log("this is this props", this.props.history);
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
    e.preventDefault()
    const deleteIngredient = [...this.state.ingredients]
    deleteIngredient.splice(index, 1)
    this.setState({
        ingredients: deleteIngredient,
        quantities: deleteIngredient,
        
      });

  }
  render() {
    console.log("this is the ingrdients", this.state);
    return (
      <>
      <h1 className="title">Create your own recipe!</h1>
      <div className="general-wrap">
      
        <form className="form-wrap bounce-in-top">
          
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
          <input ref={this.state.image} name="image" type="file" />
          <button onClick={this.handleSubmit}>ok</button>
        </form>

        <div className="info-box">
          <h1>information</h1>
          <table className="table">
            <tbody>
              <tr className="table-title">
                <th>Ingredient</th>
                <th>Quantity</th>
              </tr>
              {this.state.ingredients.map((element, i) => {
                return (
                  <tr className="ingredients">
                    <td key={i}>{element}</td>
                    <td>{this.state.quantities[i]}</td>
                    <button onClick={(evt) => this.removeIngredientBar(evt, this.index)}><i className="fas fa-trash-alt"></i></button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
      </>
    );
  }
}

export default withAuth(CreateForm);
