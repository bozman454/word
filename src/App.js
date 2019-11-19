import React from 'react';
import Nav from './Nav';
import Message from './Message';
import Dashboard from './Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {

  return (
    <Router>
      <Nav />
      

     
      <Switch>
        
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
      </Switch>
    </Router>

  );
}
