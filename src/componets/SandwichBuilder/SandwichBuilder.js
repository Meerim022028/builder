import { useEffect, useState } from "react"
import classes from "./SandwichBuilder.module.css";
import SandwichPreview from "./SandwichPreview/SandwichPreview";
import SandwichControls from "./SandwichControls/SandwichControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import axios from "axios";


const SandwichBuilder = ({ history }) => {
  const prices = {
    cheese:2,
    tomato: 3.5,
    meat:4,
    salad:2,
    Bacon:2,
    onions:1,
    // Bread:2,
    // Breadtwo:2,
   
  };


  
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(loadDefaults, []);

  function loadDefaults() {
    axios
      .get('https://builder2-f8ec3-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.ingredients);
      });
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    axios
      .post('https://builder-a51d0-default-rtdb.firebaseio.com/orders.json', {
        ingredients: ingredients,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        loadDefaults();
        history.push('/checkout');
      });
  }

  return (
    <div className={classes.SandwichBuilder}>
      <SandwichPreview
        ingredients={ingredients}
        price={price} />
      <SandwichControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            />
          <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}
//   const [ingredients, setIngredients] = useState({});
//   const [price, setPrice] = useState(150);
//   const [canBuy, setCanBuy] = useState(true);
//   const [isBuying, setIsBuying] = useState(false);

//   useEffect(
//     () => axios
//       .get('https://builder2-f8ec3-default-rtdb.firebaseio.com/default.json')
//       .then(response => {
//         setPrice(response.data.price);

       
//         setIngredients(response.data.ingredients);
//       }), []
//   );

//   function checkCanBuy(newIngredients) {
//     const totalIngredients = Object.values(newIngredients)
//       .reduce((total, current) => total + current);
//     setCanBuy(totalIngredients > 0);
//   }

//   function addIngredient(type) {
//     const newIngredients = { ...ingredients };
//     newIngredients[type]++;
//     checkCanBuy(newIngredients);
//     setPrice(price + prices[type]);
//     setIngredients(newIngredients);
//   }

//   function removeIngredient(type) {
//     if (ingredients[type]) {
//       const newIngredients = { ...ingredients };
//       newIngredients[type]--;
//       checkCanBuy(newIngredients);
//       setPrice(price - prices[type]);
//       setIngredients(newIngredients);
//     }
//   }

//   return (
//     <div className={classes.SandwichBuilder}>
//       <Modal show={isBuying} cancelCallback={() => setIsBuying(false)}>
//         <OrderSummary ingredients={ingredients} price={price} />
//       </Modal>

//       <SandwichPreview
//         ingredients={ingredients}
//         price={price} />
//       <SandwichControls
//         canBuy={canBuy}
//         setIsBuying={setIsBuying}
//         ingredients={ingredients}
//         addIngredient={addIngredient}
//         removeIngredient={removeIngredient}
//         />
//     </div>
//   );
// }

export default SandwichBuilder;