import classes from "./SandwichBuilder.module.css";
import SandwichPreview from "./SandwichPreview/SandwichPreview";
import SandwichControls from "./SandwichControls/SandwichControls";

const SandwichBuilder = () => {
  return (
    <div className={classes.SandwichBuilder}>
      <SandwichPreview />
      <SandwichControls />
    </div>
  );
}

export default SandwichBuilder;