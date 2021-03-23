import classes from "./SandwichIngredient.module.css";

const SandwichIngredient = ({ type }) => {
  return (
    <div className={classes.SandwichIngredient}>{type}</div>
  );
}

export default  SandwichIngredient;