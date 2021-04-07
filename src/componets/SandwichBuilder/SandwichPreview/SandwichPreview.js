
import SandwichIngredient from "../SandwichIngredient/SandwichIngredient";
import classes from "./SandwichPreview.module.css";
import ingredientsBackground from "../../../images/bread.svg";



const SandwichPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<SandwichIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  
return (
  <div className={classes.SandwichPreview}>
    <div className={classes.color}>
      <div/>
      
      <div
          className={classes.ingredients}
          style={{ backgroundImage: `url(${ingredientsBackground})` }}>
          {result}
        </div>
      </div>
    <div className={classes.price}>{price.toFixed(1)} som</div>
  </div>
);
}

export default SandwichPreview;