import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short"),
});

const LoginForm = () => {
  const [formState, setFormState] = useState(

  // const history = useHistory();

  const [formState, setFormState] = useState([
    {
      email: "",
      password: ""
    }
  );

  const [errorState, setErrorState] = useState({
    email: "",
    password: ""
  });

  const validate = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [event.target.name]: "",
        });
      })
      .catch((error) => {
        console.log(error.errors);
        setErrorState({
          ...errorState,
          [event.target.name]: error.errors[0],
        });
      });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
    .then((response) => {
      console.log(response)

       // localStorage.setItem('token', res.data.payload) <-check endpoint for payload
       // history.push(///)
    })
    
      .catch((error) => console.log(error));
  };

  const inputChange = (event) => {
    event.persist();
    validate(event);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        name="email"
        value={formState.email}
        onChange={inputChange}
      />
      {errorState.email.length > 0 ? <p>{errorState.email}</p> : null}
      <label htmlFor="password"> Password: </label>
      <input
        id="password"
        type="password"
        name="password"
        value={formState.password}
        onChange={inputChange}
      />
      {errorState.password.length > 0 ? <p>{errorState.password}</p> : null}
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
