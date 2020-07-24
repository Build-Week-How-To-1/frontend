import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar.js'
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import HowToForm from "./components/HowToForm";


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
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
