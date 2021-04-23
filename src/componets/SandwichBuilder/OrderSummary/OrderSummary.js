import classes from "./OrderSummary.module.css";


const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    Cheese:"cheese",
    tomato:" tomato",
    salad:"salad",
    meat:"meat",
    bacon:"bacon",
    onion:"onion",
  }
  const results = Object.keys(ingredients)
    .map(type => <li>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}
export default OrderSummary;