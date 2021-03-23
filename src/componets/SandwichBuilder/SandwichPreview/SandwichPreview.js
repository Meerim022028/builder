 import SandwichIngredient from "../SandwichIngredient/SandwichIngredient";
import classes from "./SandwichPreview.module.css";

const SandwichPreview = () => {
  return (
    <div className={classes.SandwichPreview}>
      <div className={classes.sauce}>
        <SandwichIngredient type="tomato" />
        <SandwichIngredient type="tomato" />
        <SandwichIngredient type="tomato" />
        <SandwichIngredient type="tomato" />
        <SandwichIngredient type="tomato" />
        <SandwichIngredient type="tomato" />
        <SandwichIngredient type="tomato" />
        <SandwichIngredient type="salami" />
        <SandwichIngredient type="olive" />
        <SandwichIngredient type="mushroom" />
      </div>
    </div>
  );
}

export default SandwichPreview;