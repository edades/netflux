import React from 'react';
import Home from './Containers/Home';
import Movie from './Containers/Movie';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/movie/:id">
        <Movie />
      </Route>
      <Route path="*">
        <div>Not found</div>
      </Route>
    </Switch>
  </Router>

export default App;
