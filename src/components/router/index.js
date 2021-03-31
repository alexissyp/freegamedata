import { Route, Switch } from "wouter";
import Home from "../../features/home";

const Router = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Router;
