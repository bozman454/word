import React from 'react';
import Nav from './Nav';
import Fixit from './Fixit';
import Dashboard from './Dashboard';

export default function App(){
  return[

    <Nav></Nav>,
    <Fixit></Fixit>,
    <Dashboard></Dashboard>


  ];
}
