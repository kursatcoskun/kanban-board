import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../containers/login/components/loginPage";
import WelcomePage from "../containers/welcome-page/components/welcomePage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
          <Route exact path="/welcome" component={WelcomePage} />
          <Redirect from="/" to="/welcome" />
        <Route path="*" exact={true} component={LoginPage} />

      </Switch>
    </div>
  );
};

export default Routes;
