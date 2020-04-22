import React from 'react';
import TextField from '@material-ui/core/TextField';

class DestinationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      job_id: props.id
    }

    this.handleDestinationSelect = this.handleDestinationSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.autocomplete = ""
  }

  componentDidMount() {
    this.autocomplete_destination = new window.google.maps.places.Autocomplete(document.getElementById('autocomplete_destination'), {})
    this.autocomplete_destination.setFields(['address_component', 'formatted_address']);
    this.autocomplete_destination.addListener("place_changed", this.handleDestinationSelect)
  }

  handleChange(event) {
    this.props.onChangeDestination({ [event.target.name]: event.target.value, job_id: this.state.job_id })
    this.setState({[event.target.name]: event.target.value})
  }

  handleDestinationSelect() {
    let addressObject = this.autocomplete_destination.getPlace()
    let address = addressObject.formatted_address
    this.setState({address: address })
    this.props.onChangeDestination({ address: address, job_id: this.state.job_id })
  }



 render() {
    return (
          <TextField
            required
            id="autocomplete_destination"
            label="Moving To"
            variant="outlined"
            className="input-field-destination"
            type="text"
            onChange={this.handleChange}
            name='address'
            style={{width: '48%'}}
          />
    );
  }
}

export default DestinationForm;
