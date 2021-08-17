import React from "react";
import { Redirect, Route } from "react-router-dom";
import { parseJwt } from "../API/axiosConfig";

function ProtectedRouteAdmin({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("token");
  const obj = parseJwt(isAuthenticated);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated && obj.role == "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRouteAdmin;
