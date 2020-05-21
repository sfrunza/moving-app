import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Box,
  Paper,
  FormHelperText,
  Typography,
  Radio,
  Button,
  makeStyles
} from '@material-ui/core';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      job_id: props.id,
      additional_info: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
       })
    this.props.onChange({
      [event.target.name]: event.target.value,
      job_id: this.state.job_id
    })
  };

 render() {
    return (
            <div style={{ marginBottom: '2rem', display: 'flex', margin: 'auto', justifyContent: 'space-between', width: 'auto', maxWidth: '747px', flexWrap: 'wrap'}}>
              <TextField
                required
                id="first_name"
                label="First Name"
                defaultValue=""
                variant="outlined"
                name='first_name'
                onChange={this.handleChange}

                style={{width: '24%'}}
              />
              <TextField
                required
                id="last_name"
                label="Last Name"
                defaultValue=""
                variant="outlined"
                name='last_name'
                onChange={this.handleChange}

                style={{width: '24%'}}
              />
              <TextField
                required
                id="email"
                label="Email"
                defaultValue=""
                variant="outlined"
                name='email'
                onChange={this.handleChange}

                style={{width: '24%'}}
              />
              <TextField
                required
                id="phone"
                label="Phone"
                defaultValue=""
                variant="outlined"
                type="number"
                name='phone'
                onChange={this.handleChange}

                style={{width: '24%'}}
              />
              <TextField
                id="additional-info"
                label="Additional Comments/Requests"
                defaultValue=""
                variant="outlined"
                name='additional_info'
                onChange={this.handleChange}
                style={{width: '100%', margin: '2em 0px'}}
                multiline
                rows={4}
              />
              <Box
                mt={6}
                display="flex"
                style={{width: '100%'}}
              >
                <Box flexGrow={1}/>
                <Button
                  color="secondary"
                  onClick={this.props.onNext}
                  variant="contained"
                  size="large"
                >
                  Next
                </Button>
              </Box>
            </div>
    );
  }
}

export default CustomerForm;
