import SandwichIngredient from "../../SandwichIngredient/SandwichIngredient";
import classes from "./SandwichControl.module.css";
import Button from "../../../UI/Button/Button";

const SandwichControl = ({ type, add, remove }) => {
    return (
      <div className={classes.SandwichControl}>
        <Button  onClick={() => add(type)}>+</Button>
        <div className={classes.ingredient}>
          <SandwichIngredient type={type} fixed />
        </div>
        <Button onClick={() => remove(type)}>-</Button>
      </div>
    );
  }
  
export default SandwichControl;