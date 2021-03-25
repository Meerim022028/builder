import SandwichControl from "./SandwichControl/SandwichControl";
import classes from "./PizzaControls.module.css";

const SandwichControls = ({ ingredients }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<SandwichControl type={ingredient} />)
  }

  return (
    <div className={classes.SandwichControls}>
      {results}
    </div>
  );
}



export default SandwichControls;