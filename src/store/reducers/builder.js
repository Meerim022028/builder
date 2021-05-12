// const initialState ={
//     ingredients: {
//         cheese:2,
//         tomato: 2,
//         meat:2,
//         salad:2,
//         bacon:2,
//         egg:1,
       
//     },
//     price:150,
// };
// const prices = {
//     cheese:2,
//     tomato: 3.5,
//     meat:4,
//     salad:2,
//     bacon:2,
//     egg:1,
   
//   };
//   const builder = (state = initialState, action) => {
//     const newState = { ...state };

//     switch (action.type) {
//         case "ADD_INGREDIENT":
//             newState.ingredients[action.ingredient]++;
//             newState.price += prices[action.ingredient];
//             break;
//         case "REMOVE_INGREDIENT":
//             newState.ingredients[action.ingredient]--;
//             newState.price -= prices[action.ingredient];

//             break;

//         default:
//             break;
//     }

//     return newState;
// }

// export default builder;

  



import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../actions/types";

const initialState = {
  ingredients: {
  },
  price: 0,
};
const prices = {
    cheese:2,
        tomato: 3.5,
        meat:4,
        salad:2,
        bacon:2,
        egg:1,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_INGREDIENT:
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
    case SET_INGREDIENTS:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;