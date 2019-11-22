import React from 'react';
import Nav from './components/Nav';
import Message from './components/Message';
import Dashboard from './components/Dashboard';
import MenuButton from './components/MenuButton';
import Bio from './components/Bio';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {

  return [
    <Nav/>,
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/bio">
          <Bio />
          </Route>
      </Switch>
    </Router>

  ];
}
