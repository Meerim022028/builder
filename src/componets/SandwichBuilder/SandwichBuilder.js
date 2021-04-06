import { useState } from "react"
import classes from "./SandwichBuilder.module.css";
import SandwichPreview from "./SandwichPreview/SandwichPreview";
import SandwichControls from "./SandwichControls/SandwichControls";


const SandwichBuilder = () => {
  const prices = {
    tomato: 3.5,
    salami: 4,
    blackOlive: .3,
   
  };
  const [ingredients, setIngredients] = useState({
    tomato: 1,
    salami: 1,
    blackOlive: 1,
    
  });
  const [price, setPrice] = useState(150);
  const [canBuy, setCanBuy] = useState(true);
  // const [isBuying,set]
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
      <SandwichPreview
        ingredients={ingredients}
        price={price} />
      <SandwichControls
        canBuy={canBuy}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default SandwichBuilder;