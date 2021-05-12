import axios from "../../axios"
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "./types";

export const add = (ingredient) => ({
  type: ADD_INGREDIENT,
  ingredient: ingredient
});

export const remove = (ingredient) => ({
  type: REMOVE_INGREDIENT,
  ingredient: ingredient
});

export const set = (data) => ({
  type: SET_INGREDIENTS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}