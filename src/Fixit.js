import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const axios = require('axios');

class Fixit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: "",
      message: "",
      submitted: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    console.log(`name: ${this.state.name}, email: ${this.state.email}, message: ${this.state.message} `)

    event.preventDefault();

    axios.post(`http://localhost:7878/api/v1/ticketgen`,{
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    .then(this.setState({submitted:"success"}))
    .catch((err)=> this.setState({submitted:err}))
  }


  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center'
    };
    const textFieldStyle = {
      width: 500,
      padding: 10
    };
    if(!this.state.submitted){
    return (
      <Container style={containerStyle} name="ticketreg" maxWidth="sm">
      <Card>
      <form onSubmit={this.handleSubmit}
        noValidate autoComplete="off">
        <TextField style={textFieldStyle} value={this.state.name} onChange={this.handleChange} required
          id="outlined-basic" name="name" label="Name" margin="normal" variant="outlined" />
        <TextField style={textFieldStyle} value={this.state.email} onChange={this.handleChange} required
          id="outlined-basic" name="email" label="Email" margin="normal" variant="outlined" />
        <TextField style={textFieldStyle} value={this.state.message} onChange={this.handleChange} required
          id="outlined-basic" name="message" label="Message" margin="normal" variant="outlined"
          multiline rows="4" />
        <CardActions><Button type='submit' color="primary" >Submit</Button></CardActions>
      </form>
      </Card>
      </Container>
    );
    }
    else{
      return(
        <Container style={containerStyle}>
          <Typography variant="h3" component="h2">
            Message sent await for an email from me!
          </Typography>
        </Container>
      )
    }
  }
}
export default Fixit;
