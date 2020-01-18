import React from 'react';
import './App.css';

import NavBar from './components/navbar/navbar'
import Drum from "./components/30daysofJS/drum kit/drum";
import Random from './components/page/page'
import { Route, Switch } from 'react-router-dom'
import { Link, NavLink } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/random" component={Random}/>
        <Route exact path="/drum" component={Drum} />
      </Switch>
    </div>
  );
}

export default App;
