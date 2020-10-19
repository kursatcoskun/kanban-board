import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../containers/login/components/loginPage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" exact={true} component={LoginPage} />
      </Switch>
    </div>
  );
};

export default Routes;
