import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Paper from '@material-ui/core/Paper';
import { typography } from '@material-ui/system';
const axios = require('axios');

class Dashboard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      detail: {
        on: false,
        ticket: {}
      },
      ticketlist: [],
    };
    this.toggleDetail = this.toggleDetail.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          ticketlist: result
        })
        console.log(this.state.ticketlist)
      })
  }
  toggleDetail = (row, e) => {
    e.preventDefault();
    console.log(row);
    if(this.state.detail.on){
      this.setState({
        detail: {
          on: false,
          ticket: {}
        }
      })
    }
    else{
    this.setState({
      detail: {
        on: true,
        ticket: row
      }
    })
  }
  }


  render() {
    const { ticketlist } = this.state;
    const cellstyle = {
      minWidth: 50
    }
    const paperstyle = {
      width: 750,
      height: 500,
      Button: {
        position: 'absolute',
        right: 0,
        bottom: 0
      }
    }
    const carddetailstyle = {
      margin: 'auto',
      width: 500,
      height: 300,

    }

    if (!this.state.detail.on)
      return (
        <Paper style={paperstyle}>

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

        </Paper>
      )
    else {
      return (
        <Paper style={paperstyle}>
          <Card style={carddetailstyle}>
          <Typography variant="h6">
            Message from: {this.state.detail.ticket.name}
            <br></br>
            <br></br>
          </Typography>
          <Typography variant="h7">
              Message: {this.state.detail.ticket.message}
          </Typography>
          <br></br>
          <Button  onClick={(e) => this.toggleDetail({}, e)}>Back</Button>
          </Card>
        </Paper>
      )
    }
  }
}
export default Dashboard;
