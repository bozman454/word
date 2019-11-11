import React from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';


class App extends React.Component {


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
    var outobj = {name: this.state.name,
    email: this.state.email,
    message: this.state.message};

    axios.post('https://word-5862e.firebaseio.com/.json',outobj)
    .then(res=>{console.log(res);
      this.setState({submitted:"success"});
      })

  }

  render() {

    const containerStyle = {
      display: 'flex',
      minWidth: 1000,
      minHeight: 2000
    };
    const textFieldStyle = {
      width: 500,
    };





    if(!this.state.submitted){
    return (
      <Container style={containerStyle} name="ticketreg" maxWidth="sm">
      <form onSubmit={this.handleSubmit}
        noValidate autoComplete="off">
        <TextField style={textFieldStyle} value={this.state.name} onChange={this.handleChange}
          id="outlined-basic" name="name" label="Name" margin="normal" variant="outlined" />
        <TextField style={textFieldStyle} value={this.state.email} onChange={this.handleChange}
          id="outlined-basic" name="email" label="Email" margin="normal" variant="outlined" />
        <TextField style={textFieldStyle} value={this.state.message} onChange={this.handleChange}
          id="outlined-basic" name="message" label="Message" margin="normal" variant="outlined"
          multiline rows="4" />
        <Button type='submit' color="primary" variant="contained">Submit </Button>
      </form>
      </Container>
    );
    }
    else{
      return(
        <Container style={containerStyle}>
        <Card style={{minWidth: 1000, minHieght: 2000}}>
        <CardContent>yo</CardContent>
        </Card>
        </Container>
      )
    }
  }
}
export default App;
