import { useState } from "react"
import classes from "./SandwichBuilder.module.css";
import SandwichPreview from "./SandwichPreview/SandwichPreview";
import SandwichControls from "./SandwichControls/SandwichControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";


const SandwichBuilder = () => {
  const prices = {
    tomato: 3.5,
    salami: 4,
    blackOlive: .3,
    cucumber:.3,
    cheese:1,
    meat:4,
    salad:2,
   
  };
  const [ingredients, setIngredients] = useState({
    tomato: 1,
    salami: 1,
    blackOlive: 1,
    cucumber:1,
    cheese:1,
    meat:1,
    salad:1,


  });
  const [price, setPrice] = useState(150);
  const [canBuy, setCanBuy] = useState(true);
  const [isBuying, setIsBuying] = useState(false);

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