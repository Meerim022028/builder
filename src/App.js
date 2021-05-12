import Layout from "./componets/Layout/Layout";
import SandwichBuilder from "./componets/SandwichBuilder/SandwichBuilder";
import Checkout from "./componets/Checkout/Checout";
import Orders from "./componets/Orders/Orders";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={ SandwichBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;