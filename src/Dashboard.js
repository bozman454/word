import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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
      .then((result) => {
        this.setState({
          ticketlist: result
        })
        console.log(this.state.ticketlist)
      })
  }

  render() {
    const { ticketlist } = this.state;
    const cellstyle = {
      minWidht: 50,
     
    }

    return (
      <Card style={{width:400}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={cellstyle} align="left">ticket ID</TableCell>
            <TableCell style={cellstyle} align="left">Sender</TableCell>
            <TableCell style={cellstyle} align="left">Sender Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ticketlist.map(row => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.ticket_id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
      </Card>
    )
  }
}
export default Dashboard;
