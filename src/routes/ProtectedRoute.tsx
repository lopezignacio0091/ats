import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
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
      render={() => (isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );
};

export default ProtectedRoute;
