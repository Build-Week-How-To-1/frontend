import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from './components/NavBar.js'
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import HowToForm from "./components/HowToForm";


function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
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
