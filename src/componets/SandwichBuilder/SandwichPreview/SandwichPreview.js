
import SandwichIngredient from "../SandwichIngredient/SandwichIngredient";
import classes from "./SandwichPreview.module.css";


const SandwichPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<SandwichIngredient key= {ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.SandwichPreview}>
      <div className={classes.color}>
       
        {result}
      </div>
    </div>
  );
}
export default SandwichPreview;