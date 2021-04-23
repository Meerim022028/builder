import classes from "./SandwichIngredient.module.css";
// import ketchupbackground from "../../../images/ketchup.svg";
import tomatoBackground from "../../../images/tomato.svg";
import baconBackground from "../../../images/bacon.svg";
import onionsBackground from "../../../images/onions.svg";
import cheeseBackground from "../../../images/cheese.svg";
import meatBackground from "../../../images/meat.svg";
import saladBackground from "../../../images/salad.svg";






import React from "react";
const SandwichIngredient = ({ type }) => {
  const types = {
    tomato: { backgroundImage: `url(${tomatoBackground})`, width: "100%", height: "30px" },
    Bacon: { backgroundImage: `url(${baconBackground})`, width: "100%", height: "10px" },
    onions: { backgroundImage: `url(${onionsBackground})`, width: "100%", height: "30px" },
    Cheese: { backgroundImage: `url(${cheeseBackground})`, width: "100%", height: "60px" },
    meat: { backgroundImage: `url(${meatBackground})`, width: "100%", height: "45px" },
    salad: { backgroundImage: `url(${saladBackground})`, width: "100%", height: "45px" },
  };



  // function getPosition(ingredientWidth) {
  //   const SandwichDiameter = 380;
  //   const SandwichRadius = SandwichDiameter / 2;
  //   const ingredientRadius = parseInt(ingredientWidth) / 2;

  //   const ingredientTop = Math.round(Math.random() * SandwichDiameter);
  //   const ingredientLeft = Math.round(Math.random() * SandwichDiameter);

  //   const distance = Math.sqrt(
  //     Math.pow(ingredientTop - SandwichRadius, 2) + Math.pow(ingredientLeft - SandwichRadius, 2)
  //   ) + ingredientRadius;

  //   return distance < SandwichRadius
  //     ? {
  //       top: ingredientTop - ingredientRadius,
  //       left: ingredientLeft - ingredientRadius
  //     }
  //     : getPosition(ingredientWidth);
  // }

  // Get random position for this ingredient.
  // const position = getPosition(types[type].width);
  // types[type].top = position.top + "px";
  // types[type].left = position.left + "px";
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