import React, { useState } from "react";
import * as yup from "yup";
import Axios from "axios";

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
        Steps - Enter each step to your process here. Be as clear and
        descriptive as possible
        <input
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
        <input
          type="text"
          name="tips"
          id="tips"
          value={howtoState.tips}
          onChange={inputChange}
        />
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default HowToForm;
