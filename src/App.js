import React from 'react';
import { Route } from "react-router-dom";
import NavBar from './components/NavBar.js'
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <NavBar/>
      <LoginForm />
    </div>
  );
}

export default App;
