import { Route, Switch } from "wouter";
import AllGames from "features/allGames";
import Home from "features/home";
import PC from "features/allGames/gameCards/pc";
import PS4 from "features/allGames/gameCards/ps4";
import IOS from "features/allGames/gameCards/ios";
import Android from "features/allGames/gameCards/android";
import XBoxOne from "features/allGames/gameCards/xbox";
import NintendoSwitch from "features/allGames/gameCards/nintendoswitch";

const Router = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/games">
      <AllGames />
    </Route>
    <Route path="/games/:title">
      {(params) => (
        <>
          <AllGames gameTitle={params.title} />
        </>
      )}
    </Route>
    {/* PC -----------------------*/}
    <Route path="/platform/pc">
      <PC />
    </Route>
    <Route path="/platform/pc/:title">
      {(params) => <PC gameTitle={params.title} />}
    </Route>

    {/* XBOX -----------------------*/}
    <Route path="/platform/xbox">
      <XBoxOne />
    </Route>
    <Route path="/platform/xbox/:title">
      {(params) => <XBoxOne gameTitle={params.title} />}
    </Route>
    {/* ANDROID -----------------------*/}
    <Route path="/platform/android">
      <Android />
    </Route>
    <Route path="/platform/android/:title">
      {(params) => <Android gameTitle={params.title} />}
    </Route>
    {/* IOS -----------------------*/}
    <Route path="/platform/ios">
      <IOS />
    </Route>
    <Route path="/platform/ios/:title">
      {(params) => <IOS gameTitle={params.title} />}
    </Route>
    {/* PS4 -----------------------*/}
    <Route path="/platform/playstation4">
      <PS4 />
    </Route>
    <Route path="/platform/playstation4/:title">
      {(params) => <PS4 gameTitle={params.title} />}
    </Route>

    {/* SWITCH -----------------------*/}
    <Route path="/platform/nintendoswitch">
      <NintendoSwitch />
    </Route>
    <Route path="/platform/nintendoswitch/:title">
      {(params) => <NintendoSwitch gameTitle={params.title} />}
    </Route>

    {/* ERROR -----------------------*/}
    <Route>
      <div>This is error page...</div>
    </Route>
  </Switch>
);

export default Router;
