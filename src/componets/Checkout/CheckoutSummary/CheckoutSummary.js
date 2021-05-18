import classes from "./CheckoutSummary.module.css";
import SandwichPreview from "../../SandwichBuilder/SandwichPreview/SandwichPreview";
// import Button from "../../UI/Button/Button";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <SandwichPreview ingredients={{
          tomato: 3, 
          bacon: 1,
          cheese: 1,
        }} price={150} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
 
export default CheckoutSummary;