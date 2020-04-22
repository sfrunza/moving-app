import React from 'react';
import TextField from '@material-ui/core/TextField';

class OriginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      job_id: props.id
    }

    this.handleOriginSelect = this.handleOriginSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.autocomplete = ""
  }

  handleOriginSelect() {
    let addressObject = this.autocomplete_origin.getPlace()
    let address = addressObject.formatted_address
    this.setState({address: address })
    this.props.onChangeOrigin({ address: address, job_id: this.state.job_id })
  }

  componentDidMount() {
    this.autocomplete_origin = new window.google.maps.places.Autocomplete(document.getElementById('autocomplete_origin'), {})
    this.autocomplete_origin.setFields(['address_component', 'formatted_address']);
    this.autocomplete_origin.addListener("place_changed", this.handleOriginSelect)
  }


  handleChange(event) {
    this.props.onChangeOrigin({ [event.target.name]: event.target.value, job_id: this.state.job_id })
    this.setState({[event.target.name]: event.target.value })
  }






 render() {
    return (
        <TextField
          required
          id="autocomplete_origin"
          label="Moving From"
          defaultValue=""
          variant="outlined"
          className="input-field-origin"
          type="text"
          onChange={this.handleChange}
          name='address'
          style={{ marginBottom: '2rem', width: '48%' }}
        />
    );
  }
}

export default OriginForm;
