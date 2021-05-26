
// import classes from "./SandwichControl.module.css";
// import Button from "../../../UI/Button/Button";
// import { useDispatch } from "react-redux";


// const SandwichControl = ({ type, count }) => {
//   const dispatch = useDispatch();
//   const names = {
//     cheese:"Cheese",
//           tomato:" Tomato",
//          salad:"Salad",
//          meat:"Meat ",
//           bacon:"Bacon",
//          egg:"Egg",
//   }
//   return (
//     <div className={classes.SandwichControl}>
//       <div className={classes.Example}>
//         <Button className="order" onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>

//         <div className={classes.ingredient}>
//           {names[type]}
//         </div>

//         <Button className="order" onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
//       </div>

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