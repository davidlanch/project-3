import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import APIHandler from "../api/handler.js";

export default class CreateForm extends Component {
  // using the constructor form to associate a ref
  constructor(props) {
    console.log(props);
    super(props); // MANDATORY !!!!
    this.state = {
      title: "",
      difficulty: "",
      ingredients: [],
      quantities: [],
      image: React.createRef(), // create a reference to attach to the virtual DOM
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault(); // prevent the form to reload
    // destructuring the state
    const { title, difficulty, ingredients, quantities } = this.state;
    // accessing the image out of the ref
    const file = this.state.image.current.files[0]; // target the image file associated to the input[type=file]

    const uploadData = new FormData(); // create a form data => an object to send as post body

    // appending the keys / values pairs to the FormData
    uploadData.append("title", title); // create a key [name] on the formDate
    uploadData.append("difficulty", difficulty); // create a key [age] on the formDate
    uploadData.append("ingredients", ingredients); // create a key [color] on the formDate
    uploadData.append("quantities", quantities);
    uploadData.append("image", file);

    try {
      await APIHandler.post("/recipe/create", uploadData);
      console.log("this is this props", this.props);
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  

  render() {
    console.log("this is state", this.state.difficulty);
    return (
      <form>
        <h1>create your own recipe!</h1>
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
          <option selected value="medium">Medium</option>
          <option value="difficult">difficult</option>
        </select>
        <input
          name="ingredients"
          type="text"
          placeholder="ingredients"
          value={this.state.ingredients}
          onChange={this.handleChange}
        />
        <input
          name="quantities"
          type="text"
          placeholder="quantities"
          value={this.state.quantities}
          onChange={this.handleChange}
        />
        {/* THE REF IS HERE */}
        <input ref={this.state.image} name="image" type="file" />
        <button onClick={this.handleSubmit}>ok</button>
      </form>
    );
  }
}
