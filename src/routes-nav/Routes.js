import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "../routes-nav/PrivateRoute";
import HomePage from "../home/HomePage";
import DetailPage from "../pages/DetailPage";
import PostProject from "../pages/PostProject";
import { Projects } from "../pages/Projects";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

const Routes = ({ login, signup }) => {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>

        <PrivateRoute exact path="/projects/post">
          <PostProject />
        </PrivateRoute>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/projects/:id">
          <DetailPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
