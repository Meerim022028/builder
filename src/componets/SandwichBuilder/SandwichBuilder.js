import { useState } from "react"
import classes from "./SandwichBuilder.module.css";
import SandwichPreview from "./SandwichPreview/SandwichPreview";
import SandwichControls from "./SandwichControls/SandwichControls";

const SandwichBuilder = () => {
  const [ingredients, setIngredients] =  useState({
    tomato: 15,
    salami:4,
    blackOlive: 3,
  });
  return (
    <div className={classes.SandwichBuilder}>
      <SandwichPreview ingredients={ingredients} />
      <SandwichControls ingredients={ingredients}/>
    </div>
  );
}

export default SandwichBuilder;