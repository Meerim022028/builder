import SandwichIngredient from "../../SandwichIngredient/SandwichIngredient";
import classes from "./SandwichControl.module.css";

const SandwichControl = ({type,count}) => {
  return (
    <div className={classes.SandwichControl}>
      <button className={classes.more}>+</button>
      <div className={classes.ingredient}>
        <SandwichIngredient type={type} fixed />
      </div>
      <button className={classes.less}>-</button>
    </div>
  );
}

export default SandwichControl;