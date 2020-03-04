import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Detail from './pages/Detail';
import FavBeersPage from './pages/FavBeers';

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/fav-beers">
            <FavBeersPage />
          </Route>
          <Route path="/detail/:beerId">
            <Detail />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
