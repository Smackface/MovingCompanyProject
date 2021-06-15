import "./App.css";
import LandingPage from "./Components/LandingPage";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInComponent from "./Components/SignInComponent";
import SignUpComponent from "./Components/SignUpComponent";
import { AuthProvider } from "./Contexts/AuthContext";
import MoveSetUp from "./Components/MoveSetUp";
import {Appointments} from "./Components/Appointments";
import Modal from "./Components/SubComponents/Modal"
import ForgotPassword from './Components/ForgotPassword'
import ProfileUpdate from "./Components/ProfileUpdate";
import CreateAccount from "./Components/SubComponents/CreateAccount";

function App() {
  const [selectedDiv, setSelectedDiv] = useState(null);

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <div className="App"  >
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
            <Route path="/Appointments" component={Appointments} >
              <Appointments setSelectedDiv={setSelectedDiv}  />
              {selectedDiv &&  (<div>
                <Modal selectedDiv={selectedDiv} setSelectedDiv={setSelectedDiv}/>
                </div>
              )}
            </Route>
            <Route path="/ForgotPassword" component={ForgotPassword}>
                <ForgotPassword />
            </Route>
            <Route path="/ProfileUpdate" component={ProfileUpdate}>
                <ProfileUpdate />
            </Route>
            <Route path="/CreateAccount" component={CreateAccount}>
                <CreateAccount />
            </Route>
          </div>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
