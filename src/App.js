import './App.css';
import LandingPage from './LandingPage';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return(
    <Router>
      <div className="App">
        <Route path= "/" component={LandingPage} />
      </div>
    </Router>
  )
}

export default App;