import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Assignment1 from './Assignment1';
import Assignment2 from './Assignment2';

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/assignment1">
            <Assignment1 />
          </Route>
          <Route path="/assignment2">
            <Assignment2 />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Root;