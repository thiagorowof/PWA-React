import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Dashboard from "./components/screens/Dashboard";
import Transaction from "./components/screens/Transaction";
import AppHeader from "./components/Header";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <AppHeader/>
          <div className="content">
            <Route exact path="/" component={Transaction}/>
            <Route path="/Dashboard" component={Dashboard}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
