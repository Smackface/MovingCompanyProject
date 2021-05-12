import './App.css';
import LandingPage from './LandingPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInComponent from './SignUpsPageComponents/SignInComponent';
import SignUpComponent from './SignUpsPageComponents/SignUpComponent';


function App() {
  return(
    <Router>
    <Switch>
      <div className="App">
        <Route path exact= "/" component={LandingPage}>
          <LandingPage />
        </Route>
        <Route path= "/SignUp" component = {SignUpComponent}>
          <SignUpComponent />
        </Route>
        <Route path= "/SignIn" component = {SignInComponent}>
          <SignInComponent />
        </Route>
      </div>
      </Switch>
    </Router>
  )
}

export default App;