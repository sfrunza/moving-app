import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from "@material-ui/pickers";
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// import CalculatorResult from "./CalculatorResult"



const movingTypeOptions = [
  { key: 'elv', text: 'Elevator Bldg.', value: 'elevator building' },
  { key: 'grfloor', text: 'No Stairs - Ground Floor', value: '1st/Ground floor' },
  { key: '2floor', text: 'Stairs - 2nd Floor', value: '2nd floor' },
  { key: '3floor', text: 'Stairs - 3rd Floor', value: '3rd floor' },
  { key: '4floor', text: 'Stairs - 4th Floor', value: '4th floor' },
  { key: '5floor', text: 'Stairs 5th or Higher - N/A', value: 'Stairs 5th or Higher - N/A', disabled: true },
  { key: 'private', text: 'Private House', value: 'private house' },
  { key: 'storage', text: 'Storage Unit', value: 'storage unit' },
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


class Calculator extends Component {
  constructor(props) {
    super(props);
        this.state = {
          movingSize: '',
          typeFrom: '',
          typeTo: '',
          origin: '',
          destination: '',
          submitted: false,
          startDate: new Date(),
          validated: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.movingSizeOptionsSelect = this.movingSizeOptionsSelect.bind(this)
        this.movingTypeOptionsSelect = this.movingTypeOptionsSelect.bind(this)
  }

  handleChange(event){
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleDate(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    this.setState({ validated: true })
    } else {
      this.setState ({ submitted: true })
    }
  }
  movingSizeOptionsSelect(){
    let moveSize = movingSizeOptions.map((item, index) => {
        return (
            <MenuItem key={item.key} value={item.value}>{item.text}</MenuItem>
        )
    })
    return moveSize
  }

  movingTypeOptionsSelect(where){
    let moveType = movingTypeOptions.map((item, index) => {
      if(item.value === "Stairs 5th or Higher - N/A"){
        return (
            <MenuItem key={item.key} value={item.value} disabled>{item.text}</MenuItem>
        )
      }
      else {
        return (
            <MenuItem key={index} value={item.value}>{item.text}</MenuItem>
        )
      }
    })
    return moveType

  }

  render() {
    let chooseFrom = 'Choose From...'
    let chooseTo = 'Choose To...'
    const onlyNumbers = (e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') };
    if(this.state.submitted){
      return(
        <div className='form-container-result animated fadeIn slower'>
      {/*  <CalculatorResult
                origin={this.state.origin}
                destination={this.state.destination}
                submitted={this.state.submitted}
                movingSize={this.state.movingSize}
                typeFrom={this.state.typeFrom}
                typeTo={this.state.typeTo}
                arraySize={movingSizeOptions}
                arrayType={movingTypeOptions}
                />
              */}
              sdfjskdfklsdfklsdmflsmf
        </div>
      )
    } else {
      return (
        <div>
          <div className="form-conatiner">
            <form onSubmit={this.handleSubmit} className="calc-form" autoComplete="off">

              <div className="calc-header">
                <h3 style={{fontFamily: "Maison Neue Bold"}}>How Much Will My Move Cost?</h3>
              </div>

              <div className="first-row">
                <div className="form-element">
                  <KeyboardDatePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    label="Moving Date"
                    format="MM/DD/YYYY"
                    value={this.state.startDate}
                    InputAdornmentProps={{ position: "start" }}
                    onChange={this.handleDate}
                    style={{padding: '0px'}}
                  />
                </div>

                <div className="form-element">
                  <TextField
                    id="origin-number"
                    label="From Zip"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    name='origin'
                    value={this.state.origin}
                    onChange={this.handleChange}
                    inputProps={
                      {maxLength: 5}
                    }
                    onInput={(e) => onlyNumbers(e) }
                  />
                </div>

                <div className="form-element">
                  <TextField
                    id="destination-number"
                    label="To Zip"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    name='destination'
                    value={this.state.destination}
                    onChange={this.handleChange}
                    inputProps={
                      {maxLength: 5}
                    }
                    onInput={(e) => onlyNumbers(e) }
                  />
                </div>
              </div>

              <div className='second-row'>
                <div className="form-element">
                  <FormControl variant="outlined" style={{width: "100%"}}>
                    <InputLabel id="select-size">Select Size</InputLabel>
                    <Select
                      labelId="select-size"
                      onChange={this.handleChange}
                      name='movingSize'
                      value={this.state.movingSize}
                    >
                    {this.movingSizeOptionsSelect()}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="third-row">
                <div className="form-element">
                  <FormControl variant="outlined" style={{width: "100%"}}>
                    <InputLabel id="choose-from">Choose From</InputLabel>
                    <Select
                      labelId="choose-from"
                      onChange={this.handleChange}
                      name='typeFrom'
                      value={this.state.typeFrom}
                    >
                    { this.movingTypeOptionsSelect(chooseFrom) }
                    </Select>
                  </FormControl>
                </div>

                <div className="form-element">
                  <FormControl variant="outlined" style={{width: "100%"}}>
                    <InputLabel id="choose-to">Choose To</InputLabel>
                    <Select
                      labelId="choose-to"
                      onChange={this.handleChange}
                      name='typeTo'
                      value={this.state.typeTo}
                    >
                    { this.movingTypeOptionsSelect(chooseTo) }
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="calculate-element">
                <Button variant="outlined" color="secondary" className="calculate-button" type="submit">
                  Calculate
                </Button>
              </div>

            </form>
          </div>

        </div>

      )
  }
  }
}

export default Calculator
