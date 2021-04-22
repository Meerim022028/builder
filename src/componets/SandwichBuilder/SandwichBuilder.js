import { useEffect, useState } from "react"
import classes from "./SandwichBuilder.module.css";
import SandwichPreview from "./SandwichPreview/SandwichPreview";
import SandwichControls from "./SandwichControls/SandwichControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import axios from "axios";


const SandwichBuilder = () => {
  const prices = {
    cheese:2,
    tomato: 3.5,
    meat:4,
    salad:2,
    bacon:2,
    onion:1,
    // Bread:2,
    // Breadtwo:2,
   
  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(150);
  const [canBuy, setCanBuy] = useState(true);
  const [isBuying, setIsBuying] = useState(false);

  useEffect(
    () => axios
      .get('https://builder2-f8ec3-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

       
        setIngredients(response.data.ingredients);
      }), []
  );

  function checkCanBuy(newIngredients) {
    const totalIngredients = Object.values(newIngredients)
      .reduce((total, current) => total + current);
    setCanBuy(totalIngredients > 0);
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    checkCanBuy(newIngredients);
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      checkCanBuy(newIngredients);
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.SandwichBuilder}>
      <Modal show={isBuying} cancelCallback={() => setIsBuying(false)}>
        <OrderSummary ingredients={ingredients} price={price} />
      </Modal>

      <SandwichPreview
        ingredients={ingredients}
        price={price} />
      <SandwichControls
        canBuy={canBuy}
        setIsBuying={setIsBuying}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default SandwichBuilder;