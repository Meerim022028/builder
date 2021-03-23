import classes from "./SandwichBuilder.module.css";
import SandwichPreview from "./SandwichPreview/SandwichPreview";
import SandwichControls from "./SandwichControls/SandwichControls";

const SandwichBuilder = () => {
  const ingredients = {
    tomaoes: 20,
    salami: 10,
    olives: 15,
  }
  return (
    <div className={classes.SandwichBuilder}>
      <SandwichPreview ingredients={ingredients} />
      <SandwichControls />
    </div>
  );
}

export default SandwichBuilder;