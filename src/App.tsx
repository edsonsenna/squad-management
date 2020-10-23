import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import Scaffold from './components/Scaffold/Scaffold';
import Home from './screens/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Scaffold>
            <Home></Home>
          </Scaffold>
        </Route>
        <Route exact path="/create">
          <Scaffold>
            <div>Create Page</div>
          </Scaffold>
        </Route>
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
}

export default App;
