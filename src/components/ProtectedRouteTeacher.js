import React from "react";
import { Redirect, Route } from "react-router-dom";
import { parseJwt } from "../API/axiosConfig";

function ProtectedRouteTeacher({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("token");
  const obj = parseJwt(isAuthenticated);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated && obj.role == "teacher" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
export default ProtectedRouteTeacher;
