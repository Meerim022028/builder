import classes from "./SandwichIngredient.module.css";

import salamibackground from "../../../images/salami.svg";
//  import tomatoBackground from "../../../images/tomato.svg";
import blackOliveBackground from "../../../images/blackOlive.svg";
import cucumberBackground from "../../../images/cucumber.svg";
import cheeseBackground from "../../../images/cheese.svg";
import meatBackground from "../../../images/meat.svg"
import saladBackground from "../../../images/salad.svg"




import React from "react";

const SandwichIngredient = ({ type }) => {
  const types = {
    // salami: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
    salami: {backgroundColor: "black", width: "100%", height: "30px"},
    salami: {backgroundImage: `url(${salamibackground})`, width: "30px", height: "30px"},
    tomato: { backgroundColor: "tomato", width: "100%", height: "35px" },
    blackOlive: { backgroundImage: `url(${blackOliveBackground})`, width: "10px", height: "10px" },
    cucumber: { backgroundImage: `url(${cucumberBackground})`, width: "30px", height: "30px" },
    cheese: { backgroundImage: `url(${cheeseBackground})`, width: "35px", height: "35px" },
    meat: { backgroundImage: `url(${meatBackground})`, width: "45px", height: "45px" },
    salad: { backgroundImage: `url(${saladBackground})`, width: "45px", height: "45px" },




  };



  function getPosition(ingredientWidth) {
    const SandwichDiameter = 380;
    const SandwichRadius = SandwichDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * SandwichDiameter);
    const ingredientLeft = Math.round(Math.random() * SandwichDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - SandwichRadius, 2) + Math.pow(ingredientLeft - SandwichRadius, 2)
    ) + ingredientRadius;

    return distance < SandwichRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  const position = getPosition(types[type].width);
  types[type].top = position.top + "px";
  types[type].left = position.left + "px";
  // Get random rotation for this ingredient.
  // types[type].transform = `rotate(${Math.round(Math.random() * 10)}deg)`;

  return (
    <div 
    
    className={classes.SandwichIngredient} 
    style={types[type]}>

    </div>
  );
}

export default React.memo(SandwichIngredient);