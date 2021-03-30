import SandwichIngredient from "../../SandwichIngredient/SandwichIngredient";
import classes from "./SandwichControl.module.css";

const SandwichControl = ({ type, add, remove }) => {
    return (
      <div className={classes.SandwichControl}>
        <button className={classes.more} onClick={() => add(type)}>+</button>
        <div className={classes.ingredient}>
          <SandwichIngredient type={type} fixed />
        </div>
        <button className={classes.less} onClick={() => remove(type)}>-</button>
      </div>
    );
  }
  
export default SandwichControl;