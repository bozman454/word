import React from 'react';
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
    this.setState({submitted:"s"})
    event.preventDefault();
  }


  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center'
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
        <p>word</p>
      )
    }
  }
}
export default App;
