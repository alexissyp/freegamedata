import { Route, Switch } from "wouter";
import Home from "features/home";
import PC from "features/home/gameCards/pc";
import PS4 from "features/home/gameCards/ps4";
import IOS from "features/home/gameCards/ios";
import Android from "features/home/gameCards/android";
import XBoxOne from "features/home/gameCards/xbox";
import NintendoSwitch from "features/home/gameCards/nintendoswitch";

const Router = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/platform/pc">
      <PC />
    </Route>
    <Route path="/platform/xbox">
      <XBoxOne />
    </Route>
    <Route path="/platform/android">
      <Android />
    </Route>
    <Route path="/platform/ios">
      <IOS />
    </Route>
    <Route path="/platform/ps4"></Route>
    <PS4 />
    <Route path="/platform/nintendoswitch">
      <NintendoSwitch />
    </Route>
    <Route path="/platform/others"></Route>
  </Switch>
);

export default Router;
