import React from "react";
import { Redirect, Route } from "react-router-dom";
import { parseJwt } from "../API/axiosConfig";

function ProtectedRouteUser({ component: Component, ...restOfProps }) {
  const token = localStorage.getItem("token");
  const obj = parseJwt(token);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        token && obj.isVerify === 1 ? (
          <Component {...props} />
        ) : token && obj.isVerify === 0 ? (
          <Redirect to="/confirm-email" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRouteUser;
