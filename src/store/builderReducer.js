const initialState ={
    ingredients: {
        cheese:2,
        tomato: 2,
        meat:2,
        salad:2,
        Bacon:2,
        onions:1,
    },
    price:150,
};
const prices = {
    cheese:2,
    tomato: 3.5,
    meat:4,
    salad:2,
    Bacon:2,
    onions:1,
  };

const builderReducer = (state = initialState, action) => {
    const newState = { ...state};

    switch (action.type) {
        case "ADD_INGREDIENT":
            newState.ingredients[action.ingredient]++;
            newState.price += prices[action.ingredient];
            break;
    case "REMOVE_INGREDIENT":
        newState.ingredients[action.ingredient]--;
        break;

        default:
            break;
    }
    return newState;
}

export default builderReducer;