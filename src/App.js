import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx'
import {Routes}  from 'react-router-dom';
import './App.css';
const HatPage = ()=>(
  <div>
    <h2>HAT PAGE</h2>
  </div>
)

function App() {
  return (
    <div>
      <Routes exact path="/" component={HomePage} />
      <Routes path="/hats" component={HatPage}/>
    </div>
  );
}

export default App;
