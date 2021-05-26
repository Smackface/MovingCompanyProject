import "./App.css";
import LandingPage from "./Components/LandingPage";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInComponent from "./SignUpsPageComponents/SignInComponent";
import SignUpComponent from "./SignUpsPageComponents/SignUpComponent";
import { AuthProvider } from "./Contexts/AuthContext";
import MoveSetUp from "./Components/MoveSetUp";
// import { PlaceProvider } from "./Contexts/PlaceContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <div className="App">
            <Route path exact="/" component={LandingPage}>
              <LandingPage />
            </Route>
            <Route path="/SignUp" component={SignUpComponent}>
              <SignUpComponent />
            </Route>
            <Route path="/SignIn" component={SignInComponent}>
              <SignInComponent />
            </Route>
            <Route path="/MoveSetUp" component={MoveSetUp}>
              <MoveSetUp />
            </Route>
          </div>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
