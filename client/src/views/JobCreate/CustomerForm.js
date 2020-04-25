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
                error={this.props.errorStyle.first_name}
                helperText={this.props.errors.first_name}
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
                error={this.props.errorStyle.last_name}
                helperText={this.props.errors.last_name}
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
                error={this.props.errorStyle.email}
                helperText={this.props.errors.email}
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
                error={this.props.errorStyle.phone}
                helperText={this.props.errors.phone}
                style={{width: '24%'}}
              />
              <TextField
                required
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
            </div>
    );
  }
}

export default CustomerForm;
