import React from 'react';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from "@material-ui/pickers";
import moment from 'moment'
import {
  Select,
  InputLabel,
  Card,
  MenuItem,
  FormControl
} from '@material-ui/core';

const movingTypeOptions = [
  { key: '6', text: 'Moving', value: 'Moving' },
  { key: '1', text: 'Moving with Storage', value: 'Moving with Storage' },
  { key: '2', text: 'Loading Help', value: 'Loading Help' },
  { key: '3', text: 'Unloading Help', value: 'Unloading Help' },
  { key: '4', text: 'Packing Only', value: 'Packing Only' },
  { key: '5', text: 'Inside Move', value: 'Inside Move' },
]
const movingSizeOptions = [
  { key: 'room', text: 'One Room or less (<1000 lbs)', value: 'Room or less (partial move)' },
  { key: 'studio', text: 'Studio Apt.', value: 'Studio apartment' },
  { key: 'onebed', text: '1 Bedroom Apt.', value: '1 Bedroom apartment' },
  { key: 'twobed', text: '2 Bedroom Apt.', value: '2 Bedroom apartment' },
  { key: 'threebed', text: '3+ Bedroom Apt.', value: '3+ Bedroom apartment' },
  { key: 'twohouse', text: '2 Bedroom House/Townhouse', value: '2 Bedroom House/Townhouse' },
  { key: 'threehouse', text: '3 Bedroom House/Townhouse', value: '3 Bedroom House/Townhouse' },
  { key: 'fourhouse', text: '4+ Bedroom House/Townhouse', value: '4+ Bedroom House/Townhouse' },
  { key: 'commercial', text: 'Office / Commercial Moving', value: 'Office / Commercial space' },
]

class JobDescriptionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pick_up_date: new Date().setDate(new Date().getDate() + 1),
      delivery_date: new Date().setDate(new Date().getDate() + 1),
      status: 'Needs Attention',
      job_time: 1,
      move_size: '',
      move_type: 'Moving'
    }

    this.handlePickupDate = this.handlePickupDate.bind(this)
    this.handleDeliveryDate = this.handleDeliveryDate.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.setState({  })
  }
  handleChange(event) {
     this.setState({
       [event.target.name]: event.target.value
     });
     this.props.onChange({ status: this.state.status, job_time: this.state.job_time, [event.target.name]: event.target.value.toString() })
  };

  movingSizeOptionsSelect(){
    let moveSize = movingSizeOptions.map((item, index) => {
        return (
            <MenuItem key={item.key} value={item.value}>{item.text}</MenuItem>
        )
    })
    return moveSize
  }
  movingTypeOptionsSelect(){
    let moveType = movingTypeOptions.map((item, index) => {
        return (
            <MenuItem key={item.key} value={item.value}>{item.text}</MenuItem>
        )
    })
    return moveType
  }

  handlePickupDate(date) {
    this.setState({
      pick_up_date: date.toString()
    });
    this.props.onChange({ pick_up_date: date.toString(), status: this.state.status, job_time: this.state.job_time, move_type: this.state.move_type })
  };

  handleDeliveryDate(date) {
    this.setState({
      delivery_date: date.toString()
    });
    this.props.onChange({ delivery_date: date.toString() })
  };

 render() {
  return (
          <div style={{marginBottom: '2rem', width: 'auto', maxWidth: '747px', margin: '2em auto', display: 'flex', justifyContent: 'space-between'}}>
            <FormControl variant="outlined" style={{width: '25%'}}>
              <InputLabel id="size-of-move" style={{backgroundColor: 'white'}}>Size of Move</InputLabel>
              <Select
                required
                id="move_size"
                label="Size of Move"
                defaultValue=""
                variant="outlined"
                name="move_size"
                value={this.state.move_size}
                onChange={this.handleChange}
                error={this.props.errorStyle.moveSize}
              >
                {this.movingSizeOptionsSelect()}
              </Select>
            </FormControl>
            <KeyboardDatePicker
              autoOk
              variant="inline"
              inputVariant="outlined"
              label="Move Date"
              format="MM/dd/yyyy"
              value={this.state.pick_up_date}
              InputAdornmentProps={{ position: "start" }}
              onChange={this.handlePickupDate}
              maxDate={new Date().setMonth(new Date().getMonth()+3)}
              disablePast={true}
              style={{width: '25%'}}
              error={this.props.errorStyle.pick_up_date}

            />
            <KeyboardDatePicker
              autoOk
              variant="inline"
              inputVariant="outlined"
              label="With keyboard"
              format="MM/dd/yyyy"
              value={this.state.delivery_date}
              InputAdornmentProps={{ position: "start" }}
              onChange={this.handleDeliveryDate}
              disablePast={true}
              maxDate={new Date().setMonth(new Date().getMonth()+6)}
              style={{width: '25%'}}
            />
            <FormControl variant="outlined" style={{width: '20%'}}>
              <InputLabel id="size-of-move" style={{backgroundColor: 'white'}}>Type of Service</InputLabel>
              <Select
                required
                id="move_type"
                label="Type of Service"
                defaultValue=""
                variant="outlined"
                name="move_type"
                value={this.state.move_type}
                onChange={this.handleChange}
                defaultValue={movingTypeOptions[0].value}

              >
                {this.movingTypeOptionsSelect()}
              </Select>
            </FormControl>
          </div>

  );
}
}

export default JobDescriptionForm;
