import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients,price }) => {
  const output = Object.keys(ingredients).map(label => <em key={label}>{label} - {ingredients[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name: {name}</li>
      <li>Phone: {phone}</li>
      <li>Address: {address}</li>
      <li>Ingredients: {output}</li>
     <strong>Price:{price}</strong>  
       </ul>
  );
}

export default Order;

