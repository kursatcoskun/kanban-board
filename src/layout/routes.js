import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../containers/login/components/loginPage";
import WelcomePage from "../containers/welcome-page/components/welcomePage";
import DashboardPage from "../containers/dashboard/components/dashboardPage";
import GuardedRoute from "../utils/guardedRoute";
import ProjectsPage from "../containers/project/components/projectsPage";
import TaskDetailPage from "../containers/task/components/taskDetailPage";
import TasksPage from "../containers/task/components/tasksPage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/welcome" component={WelcomePage} />
        <GuardedRoute
          path="/dashboard"
          component={DashboardPage}
          auth={!!localStorage.getItem("token")}
        />
        <GuardedRoute
          path="/projects"
          component={ProjectsPage}
          auth={!!localStorage.getItem("token")}
        />
        <GuardedRoute
          path="/task/detail/:id"
          component={TaskDetailPage}
          auth={!!localStorage.getItem("token")}
        />
        <GuardedRoute
          path="/tasks"
          component={TasksPage}
          auth={!!localStorage.getItem("token")}
        />
        <Redirect from="/" to="/welcome" />
        <Route path="*" exact={true} component={LoginPage} />
      </Switch>
    </div>
  );
};

export default Routes;
