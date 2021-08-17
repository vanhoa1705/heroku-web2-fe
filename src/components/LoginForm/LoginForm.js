import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginForm.css";
import { parseJwt } from "../../API/axiosConfig";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import api from "../../API/listAPI";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history = useHistory();
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmit = async function (data) {
    try {
      const res = await api.login(data);
      if (res.data.result) {
        localStorage.token = res.data.data.accessToken;
        localStorage.refreshToken = res.data.data.refreshToken;
        const obj = parseJwt(res.data.data.accessToken);
        localStorage.userId = obj.userId;
        localStorage.username = obj.username;

        props.setIsLogin(true);

        history.push("/");
      } else {
        alert("Invalid login.");
      }
    } catch (err) {
      if (err.response) {
        setErrorMessage(err.response.data.message);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  };

  return (
    <div className="login">
      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <h3>Log In</h3>

        {errorMessage ? (
          <Alert
            variant="warning"
            onClose={() => setErrorMessage(false)}
            dismissible
          >
            {errorMessage}
          </Alert>
        ) : null}

        <div className="form-group">
          <label>
            Username {errors.username && <span color="red">*</span>}
          </label>
          <input
            className="form-control"
            placeholder="Enter username"
            type="text"
            autoFocus
            {...register("username", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>
            Password{" "}
            {errors.password && <span style={{ color: "red" }}>*</span>}
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Log In
        </button>
        <p className="forgot-password text-right">
          Forgot <Link to="/">password?</Link>
        </p>
        <p className="forgot-password text-right">
          <Link to="/signup">Create account </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
