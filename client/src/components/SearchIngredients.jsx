import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router';

function SearchIngredients(props) {
    console.log("the ingredients i am trying to use in search ingredients: ", props?.ingredientsFromHome||[""])
    const [ingredients, setIngredients] = useState(props?.ingredientsFromHome||[""]);

    // console.log("the ingredients are: ", ingredients)

    useEffect(() => {
        if (typeof props.onIngredientInput === "function") {
        props.onIngredientInput(ingredients)}
    }, [ingredients])

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

    return (
        <div>
            <form>
                {
                    ingredients.map((el, index) => {
                        return( <React.Fragment key={index}>
                                    <input name="ingredient" type="text" value={ingredients[index]} onChange={(evt) => handleChange(evt, index)} />
                                    {
                                        ingredients.length > 1 && <button onClick={(evt) => removeIngredientBar(evt, index)}><i className="fas fa-trash-alt"></i></button>
                                    }
                                    <br/>
                                </React.Fragment>
                        )
                    })
                }
                {(ingredients.length<5) && <button onClick={addIngredientBar}>+</button>}
            </form>
        </div>
    )
}

export default withRouter(SearchIngredients)