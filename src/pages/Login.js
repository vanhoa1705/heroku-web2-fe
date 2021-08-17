import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

function Login(props) {
  document.title = "Login";
  return (
    <div>
      <LoginForm {...props} />
    </div>
  );
}

export default Login;
