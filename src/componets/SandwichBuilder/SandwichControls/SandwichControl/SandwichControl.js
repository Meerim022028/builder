
import classes from "./SandwichControl.module.css";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";


const SandwichControl = ({ type, count }) => {
  const dispatch = useDispatch();
  const name ={
    cheese:"Cheese",
    tomato:" Tomato",
    salad:"Salad",
    meat:"Meat ",
    bacon:"Bacon",
    egg:"Egg",
  }
  return (
    <div className={classes.SandwichControl}>
      <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>
      <div className={classes.ingredient}>

        {name[type]}
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
    </div>
  );
}

  
export default SandwichControl;