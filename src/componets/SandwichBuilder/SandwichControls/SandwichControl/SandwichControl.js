
// import classes from "./SandwichControl.module.css";
// import Button from "../../../UI/Button/Button";
// import { useDispatch } from "react-redux";


// const SandwichControl = ({ type, count }) => {
//   const dispatch = useDispatch();
//   const name ={
//     cheese:"Cheese",
//     tomato:" Tomato",
//     salad:"Salad",
//     meat:"Meat ",
//     bacon:"Bacon",
//     egg:"Egg",
//   }
  
//   return (
//     <div className={classes.SandwichControl}>
//       <Button onClick={() => dispatch(add(type))}>+</Button>
//       <div className={classes.ingredient}>
//         <SandwichIngredient type={type} fixed />
//       </div>
//       <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
//     </div>
//   );
// }
  
//  export default SandwichControl;


// import { useDispatch } from "react-redux";
// import { add, remove, } from "../../../../store/actions/builder";
// import Button from "../../../UI/Button/Button";
// import SandwichIngredient from "../../SandwichIngredient/SandwichIngredient";
// import classes from "./SandwichControl.module.css";

// const SandwichControl = ({ type, count }) => {
//    const dispatch = useDispatch();
//    const name ={
//       cheese:"Cheese",
//       tomato:" Tomato",
//      salad:"Salad",
//      meat:"Meat ",
//       bacon:"Bacon",
//      egg:"Egg",
//     }

//   return (
//     <div className={classes.SandwichControl}>
//       <Button onClick={() => dispatch(add(type))}>+</Button>
//       <div className={classes.ingredient}>
//         <SandwichIngredient type={type} fixed />
//       </div>
//       <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
//     </div>
//   );
// }

// export default SandwichControl;

import classes from "./SandwichControl.module.css";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";


const SandwichControl = ({ type, count }) => {
  const dispatch = useDispatch();
  const names = {
    cheese:"Cheese",
          tomato:" Tomato",
         salad:"Salad",
         meat:"Meat ",
          bacon:"Bacon",
         egg:"Egg",
  }
  return (
    <div className={classes.SandwichControl}>
      <div className={classes.Example}>
        <Button className="order" onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>

        <div className={classes.ingredient}>
          {names[type]}
        </div>

        <Button className="order" onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
      </div>

    </div>
  );
}

export default SandwichControl;