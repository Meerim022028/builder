import Layout from "./componets/Layout/Layout";
import SandwichBuilder from "./componets/SandwichBuilder/SandwichBuilder";
import Auth from "./componets/Auth/Auth";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import { restore } from "./store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Logout from "./componets/Logout/Logout"
import Orders from "./componets/Orders/Orders";
import Checkout from "./componets/Checkout/Checout";


const App = () => {
  const disptach = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => {
    disptach(restore());
  }, [disptach]);


let output =(
  <Switch>
  <Route path="/" component={ SandwichBuilder} exact />
  <Route path="/auth" component={Auth} />
  <Redirect to="/" />
</Switch>
);
if (isAuthenticated) {
  output = (
  <Switch>
    <Route path="/" component={ SandwichBuilder} exact />
    <Route path="/logout" component={Logout} />
    <Route path="/orders" component={Orders} /> 
     <Route path="/checkout" component={Checkout} />
    <Route path="/auth" component={Auth} />
    <Route path="/logout" component={Logout} />
  
    <Redirect to="/" />
  </Switch>
  )
}
  return (
    <div className="App">
      <Layout>
        {output}
      </Layout>
    </div>
  );
}

export default App;