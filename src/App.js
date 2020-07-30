import React, { useState } from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage.js';

import LoginForm from './components/LoginForm.js';
import SignUpForm from './components/SignUpForm.js';
import HowToForm from './components/HowToForm.js';
import AboutPage from './components/AboutPage.js';
import HowToCardList from './components/HowToCardList';
import HowToContext from './contexts/HowToContext';


function App() {

  const [howTos, setHowTos] = useState([])

  return (
    <HowToContext.Provider value={{howTos, setHowTos}}>
    <Router>
        <NavBar/>
        <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route path='/register'>
              <SignUpForm />
            </Route>
            <PrivateRoute exact path="/howto-form" component={HowToForm} />
      </Switch>
      <HowToCardList />
    </Router>
    </HowToContext.Provider>
  );
}

export default App;
