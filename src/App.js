import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage.js';

import LoginForm from './components/LoginForm.js';
import SignUpForm from './components/SignUpForm.js';
import HowToForm from './components/HowToForm.js';

function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route path='/register'>
              <SignUpForm />
            </Route>
            <PrivateRoute exact path="/howto-form" component={HowToForm} />
      </Switch>
    </Router>
  );
}

export default App;
