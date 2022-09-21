import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={HatPage} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
