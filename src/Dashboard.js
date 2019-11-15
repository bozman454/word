import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
const axios = require('axios');

class Dashboard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      detail: {
        on: false,
        ticket: {}
      },
      ticketlist: [{
        ticket_id: 1,
        name: "Willem",
        email: "Willem@willem.com",
        message: "Example Message Here"
      },
      {
        ticket_id: 2,
        name: "Bosman",
        email: "Bosman@Bosman.com",
        message: "Example Message Here"
      },
      ]
    };
    this.toggleDetail = this.toggleDetail.bind(this)
  }
  //  ** Needs DB to work **
  // componentDidMount() {
  //   fetch('http://localhost:7878/api/v1/gettickets')
  //     .then(res => res.json())
  //     .then((result) => {
  //       this.setState({
  //         ticketlist: result
  //       })
  //       console.log(this.state.ticketlist)
  //     })
  // }
  toggleDetail = (row, e) => {
    e.preventDefault();
    console.log(row)
    this.setState({
      detail: {
        on: true,
        ticket: row
      }
    })
  }


  render() {
    const { ticketlist } = this.state;
    const cellstyle = {
      minWidht: 50
    }
    if (!this.state.detail.on)
      return (
        <Card style={{ width: 400 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Ticket ID</TableCell>
                <TableCell align="left">Sender</TableCell>
                <TableCell align="left">Sender Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ticketlist.map(row => (
                <TableRow onClick={(e) => this.toggleDetail(row, e)} key={row.name}>
                  <TableCell style={cellstyle} align="left">{row.ticket_id}</TableCell>
                  <TableCell style={cellstyle} align="left">{row.name}</TableCell>
                  <TableCell style={cellstyle} align="left">{row.email}</TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </Card>
      )
    else {
      return (
        <Card>
          <CardContent>
            {this.state.detail.ticket.message}
          </CardContent>
        </Card>
      )
    }
  }
}
export default Dashboard;
