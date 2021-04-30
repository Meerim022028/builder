import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"
import axios from "axios";


const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const order = {
      name: data.get('name'),
      phone: data.get('phone'),
      address: data.get('address'),
      ingredients: {
        cheese:2,
        tomato: 3.5,
        meat:4,
        salad:2,
        Bacon:2,
        onions:1,
      }
    }

    axios.post('https://builder2-f8ec3-default-rtdb.firebaseio.com/orders.json', order)
      .then(response => {
        history.replace('/');
      });
  }

  return (
    <div>
      <CheckoutSummary
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
 
export default Checkout;