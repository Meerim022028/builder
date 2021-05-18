import classes from "./SandwichIngredient.module.css";
// import ketchupbackground from "../../../images/ketchup.svg";
import tomatoBackground from "../../../images/tomato.svg";
import baconBackground from "../../../images/bacon.svg";
import eggBackground from "../../../images/egg.svg";
import cheeseBackground from "../../../images/cheese.svg";
import meatBackground from "../../../images/meat.svg";
import saladBackground from "../../../images/salad.svg";






import React from "react";
const SandwichIngredient = ({
  type
}) => {
  const types = {
    tomato: {
      backgroundImage: `url(${tomatoBackground})`,
      width: "100%",
      height: "20px"
    },
    bacon: {
      backgroundImage: `url(${baconBackground})`,
      width: "100%",
      height: "10%"
    },
    egg: {
      backgroundImage: `url(${eggBackground})`,
      width: "100%",
      height: "70px"
    },
    cheese: {
      backgroundImage: `url(${cheeseBackground})`,
      width: "100%",
      height: "50px"
    },
    meat: {
      backgroundImage: `url(${meatBackground})`,
      width: "100%",
      height: "50px"
    },
    salad: {
      backgroundImage: `url(${saladBackground})`,
      width: "100%",
      height: "60px"
    },

  };


  return ( <
    div

    className = {
      classes.SandwichIngredient
    }
    style = {
      types[type]
    } >

    </div>
  );
}

export default React.memo(SandwichIngredient);