import React from 'react';
import './App.css';

import NavBar from './components/navbar/navbar'
import Drum from "./components/30daysofJS/drum kit/drum";
import Random from './components/page/page'
import { Route, Switch } from 'react-router-dom'
import Clock from "./components/30daysofJS/clock/clock";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/random" component={Random}/>
        <Route exact path="/drum" component={Drum} />
      </Switch>
    </div>
  );
}

export default App;
