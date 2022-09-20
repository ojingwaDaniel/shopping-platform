import React from 'react';
// import { Routes, Route } from "react-router-dom";
import { Router, Route, Switch } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component.jsx'
import './App.css';
const HatPage = ()=>(
  <div>
    <h2>HAT PAGE</h2>
  </div>
)

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatPage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
