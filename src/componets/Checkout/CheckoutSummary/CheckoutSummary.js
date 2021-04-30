import classes from "./CheckoutSummary.module.css";
import SandwichPreview from "../../SandwichBuilder/SandwichPreview/SandwichPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <SandwichPreview ingredients={{
          tomato: 5, 
          salad: 8,
          cheese: 5,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;