import React, { Component } from "react";
import APIHandler from "../api/handler.js";
import { withAuth } from "../auth/UserContext.js";
import "./../styles/createForm.css"
import './../styles/SearchIngredients.css';


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
      category:"Meat",
      instructions:"",
      image: React.createRef(), // create a reference to attach to the virtual DOM
      error:false
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault(); // prevent the form to reload
    // destructuring the state
    const { title, difficulty, ingredients, category, quantities, instructions } = this.state;
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
    uploadData.append("category", category);
    uploadData.append("instructions", instructions);
    uploadData.append("image", file);
    uploadData.append("author", user);
    try {
      await APIHandler.post("/recipe/create", uploadData);
      this.props.history.push("./")
      console.log("this is this props", this.props.history);
    } catch (err) {
      console.error(err);
      this.setState({
        error: true
      })
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

  }
  render() {
    console.log("this is the ingrdients", this.state);
    return (
      <>
      <h1 className="title">Create your own recipe!</h1>
      <div className="general-wrap">
      
        <form className="form-wrap bounce-in-top">
          {(this.state.error === true) && <div className="error">Please fill in all the values</div>}
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
          <div className="ingredients-creation">
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
          
          <button className="create-button" onClick={this.addIngredientBar}>Validate</button>

          </div>
          <textarea className="instructions-recipe"
            name="instructions"
            type="text"
            placeholder="instructions"
            value={this.state.instructions}
            onChange={this.handleChange}
          />
          
          

          {/* THE REF IS HERE */}
          <input className="input-file" ref={this.state.image} name="image" type="file" />
          <button className="create-button create-ingredients-button" onClick={this.handleSubmit}>Create the recipe</button>
        </form>

        <div className="info-box">
          <h1>Your ingredients!</h1>
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
<<<<<<< HEAD
                    <img className="ingredient-image" src={"https://themealdb.com/images/ingredients/" + element + ".png"} alt=""/>
=======
>>>>>>> b0c6689cd0a80cf3b9d813775cdd2772d3d399ea
                    <button onClick={(evt) => this.removeIngredientBar(evt, i)}><i className="fas fa-trash-alt"></i></button>
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
