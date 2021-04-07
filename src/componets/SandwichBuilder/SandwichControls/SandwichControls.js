import SandwichControl from "./SandwichControl/SandwichControl";
import classes from "./SandwichControls.module.css";
import Button from "../../UI/Button/Button";


const SandwichControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  canBuy,
  setIsBuying
}) => {
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
      <Button
        onClick={() => setIsBuying(true)}
        disabled={!canBuy}>
          Order
      </Button>
    </div>
  );
}


export default SandwichControls;