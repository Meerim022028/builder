import axios from "../../axios";
import { SET_ORDERS } from "./types";

export const set = (data) => ({
  type: SET_ORDERS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/orders.json')
    .then(response => dispatch(set(response.data)));
}