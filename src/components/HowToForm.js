import React, { useState } from "react";
import * as yup from "yup";
import Axios from "axios";
import styled from "styled-components";

const formSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  introduction: yup.string().required("Intro is required"),
  steps: yup.string().required("Steps are required"),
  tips: yup.string(),
});

const HowToForm = () => {
  const [howtoState, setHowtoState] = useState({
    title: "",
    introduction: "",
    steps: "",
    tips: "",
  });

  const [errorState, setErrorState] = useState({
    title: "",
    introduction: "",
    steps: "",
    tips: "",
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
    Axios.post("https://reqres.in/api/users", howtoState)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const inputChange = (event) => {
    event.persist();
    validate(event);
    setHowtoState({ ...howtoState, [event.target.name]: event.target.value });
  };

  return (
    <HowCard>
      <form onSubmit={formSubmit}>
        <label htmlFor="title">
          Title - Add a catchy title
          <input
            type="text"
            name="title"
            id="title"
            value={howtoState.title}
            onChange={inputChange}
          />
          {errorState.title.length > 0 ? <p>{errorState.title}</p> : null}
        </label>
        <label htmlFor="introduction">
          Introduction - Share a quick intro with your DIYer
          <input
            type="text"
            name="introduction"
            id="introduction"
            value={howtoState.introduction}
            onChange={inputChange}
          />
          {errorState.introduction.length > 0 ? (
            <p>{errorState.introduction}</p>
          ) : null}
        </label>
        <label htmlFor="steps">
          Steps - Enter each step to your process here
          <textarea
            type="text"
            name="steps"
            id="steps"
            value={howtoState.steps}
            onChange={inputChange}
          />
          {errorState.steps.length > 0 ? <p>{errorState.steps}</p> : null}
        </label>
        <label htmlFor="tips">
          Tips - Enter any tips, warnings, supplies needed, etc
          <textarea
            type="text"
            name="tips"
            id="tips"
            value={howtoState.tips}
            onChange={inputChange}
          />
        </label>
        <button type="submit">Create Post</button>
      </form>
    </HowCard>
  );
};

export default HowToForm;

const HowCard = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1rem;
  background-color: lightgray;
  border: 0.3rem solid gray;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    label {
      display: flex;
      flex-direction: column;
    }

    input {
      width: 35rem;
      border: 0.1rem solid orange;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    textarea {
      width: 35rem;
      border: 0.1rem solid orange;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;
