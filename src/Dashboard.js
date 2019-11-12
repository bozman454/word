import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const axios = require('axios');
class Dashboard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      ticketlist: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:7878/api/v1/gettickets')
    .then(res => res.json())
    .then((result)=>{
      this.setState({
        ticketlist: result
      })
      console.log(this.state.ticketlist)
    })
  }

  render(){
    const { ticketlist } = this.state;
    // const listitems = ticketlist.map((item) =>
    //   <li id={item.ticket_id}>{item.message}</li>
    //   );
    return (
      //   <ul key="todolist" id="out">
      //     {listitems}
      //   </ul>
      // );
      <Table aria-label="simple table">
      <TableHead>
      <TableRow>
      <TableCell>Displaying Submmited tickets</TableCell>
      <TableCell align="right">ticket ID</TableCell>
      <TableCell align="right">Sender</TableCell>
      <TableCell align="right">Sender Email</TableCell>
      <TableCell align="right">message</TableCell>
      </TableRow>
      </TableHead>
      <TableBody>
      {ticketlist.map(row => (
        <TableRow key={row.name}>
        <TableCell component="th" scope="row">
        {row.name}
        </TableCell>
        <TableCell align="right">{row.ticket_id}</TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.message}</TableCell>
        </TableRow>
      ))}

      </TableBody>
      </Table>
    )
    }
  }
  export default Dashboard;
