import React, { Component } from 'react';
import axios from 'axios'
import {
  Box,
  Button,
  TextField,
  FormHelperText,
} from '@material-ui/core';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
     };
     this.handleSubmit = this.handleSubmit.bind(this)
  }
  UNSAFE_componentWillMount() {
    return !this.props.loggedInStatus ? this.redirect('/users/sign_in') : this.redirect('/')
  }

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit(event) {
    event.preventDefault()
    const { email, password} = this.state
let user = {
      email: email,
      password: password
    }

    axios.post('/users/sign_in', {user}, {withCredentials: true})
    .then(response => {
      if (response.data) {
        this.props.handleLogin(response.data)
        if (response.data.admin === true) {
          this.redirect('/app/calendar')
        } else this.redirect('/calendar')
      } else {
        this.setState({
          errors: response.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))


  };

  redirect = (path) => {
      this.props.history.push(path)
    }


handleErrors = () => {
    return (
        <Box mt={3}>
          <FormHelperText error>
            {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
              })
            }
          </FormHelperText>
        </Box>
    )
  }
render() {
    const {email, password} = this.state
return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            autoFocus
            label="Email Address"
            margin="normal"
            name="email"
            onChange={this.handleChange}
            type="email"
            value={email}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={this.handleChange}
            type="password"
            value={password}
            variant="outlined"
          />
          <Box mt={2}>
            <Button
              color="secondary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In
            </Button>

          </Box>
        </form>
        <div>
        {
          this.state.errors ? this.handleErrors() : null
        }
      </div>
    </div>
    );
  }
}
export default SignIn;
