import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./SignupForm.css";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import api from "../../API/listAPI";
import { Alert } from "react-bootstrap";

const SignupForm = (props) => {
  let {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState(false);
  let history = useHistory();

  const onSubmit = async function (data) {
    try {
      data.birthday = moment(data.birthday).format("yyyy-MM-DD").toString();
      const res = await api.register(data);
      if (res.data.result) {
        history.push("/login");
      } else {
        alert("Invalid register.");
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
    <div className="signup">
      <form className="form-signup" onSubmit={handleSubmit(onSubmit)}>
        <h3>Register</h3>

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
            Username
            {errors.username && <span color="red">*</span>}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            {...register("username", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>
            Password
            {errors.password && <span color="red">*</span>}
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>
            Full name
            {errors.name && <span color="red">*</span>}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            {...register("name", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>
            Gender
            {errors.gender && <span color="red">*</span>}
          </label>
          <Row>
            <Col>
              <input
                type="radio"
                value="Nam"
                name="gender"
                {...register("gender", { required: true })}
              />
              Male
            </Col>
            <Col>
              <input
                type="radio"
                value="Nữ"
                name="gender"
                {...register("gender", { required: true })}
              />
              Female
            </Col>
            <Col>
              <input
                type="radio"
                value="Khác"
                name="gender"
                {...register("gender", { required: true })}
              />
              Other
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <label>
            Email
            {errors.email && <span color="red">*</span>}
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>
            Phone number
            {errors.number && <span color="red">*</span>}
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Phone number"
            {...register("phone_number", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>
            Birthday
            {errors.birthday && <span color="red">*</span>}
          </label>
          <div>
            <Controller
              control={control}
              name="birthday"
              render={({ field }) => (
                <DatePicker
                  className="form-control"
                  placeholderText="Select date"
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  selected={
                    field.value
                      ? field.value
                      : field.onChange(new Date("1999-01-01"))
                  }
                  dateFormat="yyyy-MM-dd"
                />
              )}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">log in?</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
