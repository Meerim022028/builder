import SandwichControl from "./SandwichControl/SandwichControl";
import classes from "./SandwichControls.module.css";

const SandwichControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<SandwichControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.SandwichControls}>
      <strong>Ingredients</strong>
      {results}
    </div>
  );
}

export default SandwichControls;