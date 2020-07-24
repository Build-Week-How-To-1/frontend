import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import LoginForm from "./components/LoginForm";
import HowToForm from "./components/HowToForm";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/login-form" component={LoginForm} />
      <Route exact path="/howto-form" component={HowToForm} />
    </div>
  );
}

export default App;
