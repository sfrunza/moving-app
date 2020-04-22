import React from 'react';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      job_id: props.id,
      first_nameError: false,
      last_nameError: false,
      emailError: false,
      phoneError: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)

  }

  validateField(value){
    if(Object.values(this.state) === "" || value === ""){
      return true
    }
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
        [event.target.name + 'Error']: this.validateField(event.target.value)
       })
    this.props.onChange({
      [event.target.name]: event.target.value, 
      job_id: this.state.job_id,
      first_nameError: this.validateField(event.target.value),
      last_nameError: this.validateField(event.target.value),
      emailError: this.validateField(event.target.value),
      phoneError: this.validateField(event.target.value)
    })
  }



 render() {
  return (
            <div style={{ marginBottom: '2rem' }}>
              <TextField
                required
                id="first_name"
                label="First Name"
                defaultValue=""
                variant="outlined"
                name='first_name'
                onChange={this.handleChange}
                error={this.state.first_nameError}
              />
              <TextField
                required
                id="last_name"
                label="Last Name"
                defaultValue=""
                variant="outlined"
                name='last_name'
                onChange={this.handleChange}
                error={this.state.last_nameError}

              />
              <TextField
                required
                id="email"
                label="Email"
                defaultValue=""
                variant="outlined"
                name='email'
                onChange={this.handleChange}
                error={this.state.emailError}

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
                error={this.state.phoneError}

              />
            </div>


  );
}
}

export default CustomerForm;
