import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  children,
  isAuthenticated,
  path,
  ...rest
}: {
  children: any;
  isAuthenticated: boolean;
  path: string;
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        isAuthenticated ? children : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
