import classes from "./SandwichBuilder.module.css";
import SandwichPreview from "./SandwichPreview/SandwichPreview";
import SandwichControls from "./SandwichControls/SandwichControls";

const SandwichBuilder = () => {
  const ingredients = {
    tomato: 5,
    salami:4,
    blackOlive: 3,
  }
  return (
    <div className={classes.SandwichBuilder}>
      <SandwichPreview ingredients={ingredients} />
      <SandwichControls />
    </div>
  );
}

export default SandwichBuilder;