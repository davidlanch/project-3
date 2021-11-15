import React, { useState, useEffects } from 'react'
import { withRouter } from 'react-router';

function SearchIngredients(props) {

    const [ingredients, setIngredients] = useState([""]);

    // console.log("the ingredients are: ", ingredients)

    const addIngredientBar = (e) => {
        e.preventDefault()
        setIngredients([...ingredients, ""])
    }

    const removeIngredientBar = (e, index) => {
        e.preventDefault()
        const newIngredients = [...ingredients]
        newIngredients.splice(index, 1)
        setIngredients(newIngredients)
    }

    const handleChange = (evt, index) => {
        let newArray = [...ingredients];
        newArray[index] = evt.target.value;
        setIngredients(newArray)
    }

    const findRecipe = (e) => {
        e.preventDefault()
        props.history.push("/all-recipes")
        console.log("recipe submitted")
    }

    return (
        <div>
            <form onSubmit={findRecipe}>
                {
                    ingredients.map((el, index) => {
                        return( <React.Fragment key={index}>
                                <input name="ingredient" type="text" value={ingredients[index]} onChange={(evt) => handleChange(evt, index)} />
                                <button onClick={(evt) => removeIngredientBar(evt, index)}><i className="fas fa-trash-alt"></i></button>
                                <br/>
                                </React.Fragment>
                        )
                    })
                }
                {(ingredients.length<5) && <button onClick={addIngredientBar}>+</button>}
                <button type="submit">Find your recipe</button>
            </form>
        </div>
    )
}

export default withRouter(SearchIngredients)