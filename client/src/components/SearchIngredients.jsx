import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router';
import './../styles/SearchIngredients.css';

function SearchIngredients(props) {
    const [ingredients, setIngredients] = useState(props?.ingredientsFromHome || props?.ingredientsFromState || [""]);

    // console.log("the ingredients are: ", ingredients)

    useEffect(() => {
        if (typeof props.onIngredientInput === "function") {
        console.log("i am in use effect and the ingredients are: ", ingredients)
        props.onIngredientInput(ingredients)}
        //setIngredients(props?.ingredientsFromState)
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
        console.log("yep smtg definitely changed")
        let newArray = [...ingredients];
        newArray[index] = evt.target.value;
        console.log("and the new ingredients are...", newArray)
        setIngredients(newArray)
    }

    return (
        <div>
            <form>
                {
                    ingredients.map((el, index) => {
                        return(
                        <div className="one-ingredient" key={index} >
                                    
                                    <img className="ingredient-image" src={"https://themealdb.com/images/ingredients/" + ingredients[index] + ".png"} alt=""/>
                                    <input className="add-ingredient" type="text" value={ingredients[index]} onChange={(evt) => handleChange(evt, index)} />
                                    {
                                        ingredients.length > 0 && <button className="ingredient-delete" onClick={(evt) => removeIngredientBar(evt, index)}><i className="fas fa-trash-alt"></i></button>
                                    }
                                    
                                    <br/>
                                   
                        </div>
                        )
                    })
                    
                }
              
                {(ingredients.length<5) && <button className="ingredient-add-button" onClick={addIngredientBar}><i className="fas fa-plus-circle"></i></button>}
   
            </form>
        </div>
    )
}

export default withRouter(SearchIngredients)