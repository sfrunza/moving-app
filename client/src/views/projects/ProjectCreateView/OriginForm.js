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

class OriginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      job_id: props.id,
      house_type_from: '',
      apt_number_origin: ''
    }

    this.handleOriginSelect = this.handleOriginSelect.bind(this)
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
    this.setState({[event.target.name]: event.target.value })
    this.props.onChangeOrigin({ [event.target.name]: event.target.value, job_id: this.state.job_id })

  }

 render() {
   // let status = this.props.disabled
   // if (this.props.job.move_type === "Unloading Help") {
   //   status = true
   // }
    return (
      <div style={{flex: '0 0 48%'}}>
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
          style={{ marginBottom: '2rem', width: '100%' }}


        />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <TextField
            id="apt-number-origin"
            label="Apt#"
            defaultValue=""
            variant="outlined"
            type="number"
            name='apt_number_origin'
            onChange={this.handleChange}
            style={{flex: '0 0 25%'}}
          />
          <FormControl variant="outlined" style={{flex: '0 0 70%'}}>
            <InputLabel id="house-type-from" style={{backgroundColor: 'white'}}>Select elevator/stairs...</InputLabel>
            <Select
              required
              id="house_type_from"
              defaultValue=""
              variant="outlined"
              name="house_type_from"
              value={this.state.house_type_from}
              onChange={this.handleChange}
              style={{width: '100%'}}
            >
              {this.houseTypeOptionsSelect()}
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default OriginForm;
