import React, { useState } from "react";

const HowToForm = () => {
  const [howtoState, setHowtoState] = useState({
    title: "",
    introduction: "",
    steps: "",
    tips: "",
  });

  const formSubmit = (event) => {
    event.preventDefault();
  };

  const inputChange = (event) => {
    setHowtoState({ name: event.target.value });
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
