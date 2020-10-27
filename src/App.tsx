import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import Scaffold from './components/ScaffoldComponent/Scaffold';
import Create from './screens/Create/Create';
import Home from './screens/Home/Home';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Scaffold>
              <Home />
            </Scaffold>
          </Route>
          <Route exact path="/create">
            <Scaffold>
              <Create />
            </Scaffold>
          </Route>
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
