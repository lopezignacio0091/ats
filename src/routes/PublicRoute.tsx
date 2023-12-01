import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  children,
  isAuthenticated,
  path,
  ...rest
}: {
  children: React.ReactNode;
  isAuthenticated: boolean;
  path: string;
}) => {
  return (
    <Route
      exact
      path={path}
      render={() => (!isAuthenticated ? children : <Redirect to="/home" />)}
    />
  );
};

export default PublicRoute;
