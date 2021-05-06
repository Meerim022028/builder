import SandwichControl from "./SandwichControl/SandwichControl";
import classes from "./SandwichControls.module.css";
import Button from "../../UI/Button/Button";

const SandwichControls = ({
  ingredients,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render pizza control for this ingredient
    results.push(<SandwichControl
        key={ingredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
  }

  return (
    <div className={classes.SandwichControls}>
      <strong>Gems</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}
export default SandwichControls;