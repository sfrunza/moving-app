import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Select,
  InputLabel,
  Card,
  MenuItem,
  FormControl
} from '@material-ui/core';

const houseTypeOptions = [
  { key: 'elv', text: 'Elevator Bldg.', value: 'elevator building' },
  { key: 'grfloor', text: 'No Stairs - Ground Floor', value: '1st/Ground floor' },
  { key: '2floor', text: 'Stairs - 2nd Floor', value: '2nd floor' },
  { key: '3floor', text: 'Stairs - 3rd Floor', value: '3rd floor' },
  { key: '4floor', text: 'Stairs - 4th Floor', value: '4th floor' },
  { key: '5floor', text: 'Stairs 5th or Higher - N/A', value: 'Stairs 5th or Higher - N/A', disabled: true },
  { key: 'private', text: 'Private House', value: 'private house' },
  { key: 'storage', text: 'Storage Unit', value: 'storage unit' },
]

class DestinationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      job_id: props.id,
      house_type_to: '',
      apt_number_destination: ''
    }

    this.handleDestinationSelect = this.handleDestinationSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.autocomplete = ""
  }
  houseTypeOptionsSelect(){
    let houseType = houseTypeOptions.map((item, index) => {
        if(item.value === "Stairs 5th or Higher - N/A"){
          return (
              <MenuItem key={item.key} value={item.value} disabled>{item.text}</MenuItem>
          )
        } else {
          return (
              <MenuItem key={item.key} value={item.value}>{item.text}</MenuItem>
          )
        }
    })
    return houseType
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
        <div style={{flex: '0 0 48%'}}>
          <TextField
            required
            id="autocomplete_destination"
            label="Moving To"
            variant="outlined"
            className="input-field-destination"
            type="text"
            onChange={this.handleChange}
            name='address'
            style={{width: '100%', marginBottom: '2rem'}}

          />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <TextField
              id="apt-number-destination"
              label="Apt#"
              defaultValue=""
              variant="outlined"
              type="number"
              name='apt_number_destination'
              onChange={this.handleChange}
              style={{flex: '0 0 25%'}}
            />
            <FormControl variant="outlined" style={{ flex: '0 0 70%'}}>
              <InputLabel id="house-type-to" style={{backgroundColor: 'white'}}>Select elevator/stairs...</InputLabel>
              <Select
                required
                id="house_type_to"
                defaultValue=""
                variant="outlined"
                name="house_type_to"
                value={this.state.house_type_to}
                onChange={this.handleChange}
              >
                {this.houseTypeOptionsSelect()}
              </Select>
            </FormControl>
          </div>
        </div>
    );
  }
}

export default DestinationForm;
