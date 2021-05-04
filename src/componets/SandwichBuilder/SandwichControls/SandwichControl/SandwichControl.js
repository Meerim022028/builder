
import classes from "./SandwichControl.module.css";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";


const SandwichControl = ({ type, count }) => {
  const dispatch = useDispatch();
  const name ={
    cheese:"cheese",
    tomato:" tomato",
    salad:"salad",
    meat:"meat",
    Bacon:"Bacon",
    onions:"onions",
  }
  return (
    <div className={classes.SandwichControl}>
 <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient:type })}>+</Button>
      <div className={classes.ingredient}>
       
        {name[type]}
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient:type })} disabled={!count}>-</Button>
    </div>
  );
}

  
export default SandwichControl;