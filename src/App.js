import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss'

import Users from "pages/Users";
import About from "pages/About";
import Page404 from "pages/Page404";
import Home from "pages/Home";

export default function App() {
  return (
    <Router>
    
      <div>
        <nav>
        <button className="menu">|||</button>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/photos" component={About} />
          <Route exact path="/collections" component={Users} />
          <Route exact path="/" component={Home} />
          <Route component={Page404} />

        </Switch>
      </div>
    </Router>
  );
}
