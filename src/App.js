import React from 'react';
import Nav from './Nav';
import Fixit from './Fixit';
import Dashboard from './Dashboard';

export default function App() {

  const badstyle = {
    display: 'flex'
  }
  return [
    <Nav></Nav>,
    <div style={badstyle}>
      <Dashboard></Dashboard>
      <Fixit></Fixit>
    </div>

  ];
}
