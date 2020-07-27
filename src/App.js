import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomePage from './components/HomePage.js';
import NavBar from './components/NavBar.js';

import LoginForm from './components/LoginForm.js';
import SignUpForm from './components/SignUpForm.js';
import HowToForm from './components/HowToForm.js';

function App() {
  return (
    <BrowserRouter>
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
            <Route exact path="/howto-form" component={HowToForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
