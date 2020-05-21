import React, { Component } from 'react'
// import CalculatorResult from "./CalculatorResult"



const movingTypeOptions = [
  { key: 'select', text: 'Select', value: '' },
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
  { key: 'sixe', text: 'Select', value: '' },
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
          startDate: null,
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
      if(item.value === ""){
        return(
          <option key={item.key} value=''>Select size of move...</option>
        )
      }
      else {
        return (
            <option key={item.key} value={item.value}>{item.text}</option>
        )

      }
    })
    return moveSize
  }

  movingTypeOptionsSelect(where){
    let moveType = movingTypeOptions.map((item, index) => {
      if(item.value === ""){
        return(
          <option key={item.key} value=''>{where}</option>
        )
      }else if(item.value === "Stairs 5th or Higher - N/A"){
        return (
            <option key={item.key} value={item.value} disabled>{item.text}</option>
        )
      }
      else {
        return (
            <option key={index} value={item.value}>{item.text}</option>
        )
      }
    })
    return moveType

  }

  render() {
    let chooseFrom = 'Choose From...'
    let chooseTo = 'Choose To...'
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
          <div>
            <form onSubmit={this.handleSubmit} className="calc-form animated fadeIn slower">
              <div className="calc-header">
                <h3>How much will my move cost?</h3>
              </div>
                  <div className="form-element">
                    <input placeholder='Date' className="w-input"/>
                  </div>
                  <div className="form-element">
                    <input
                      placeholder='From Zip'
                      name='origin'
                      type='number'
                      value={this.state.origin}
                      onChange={this.handleChange}
                      className="w-input"
                    />
                </div>
                <div className="form-element">
                  <input
                    placeholder='To Zip'
                    name='destination'
                    type='number'
                    value={this.state.destination}
                    onChange={this.handleChange}
                    className="w-input"
                  />
                </div>

                <div className="form-element">
                  <select
                    name='typeFrom'
                    onChange={this.handleChange}
                    as='select'
                    className="w-select"

                  >
                  { this.movingTypeOptionsSelect(chooseFrom) }
                  </select>
                </div>
                <div className="form-element">
                  <select
                    name='typeTo'
                    onChange={this.handleChange}
                    as='select'
                    className="w-select"

                  >
                  {this.movingTypeOptionsSelect(chooseTo)}
                  </select>
                </div>
                <div className="form-element">
                  <select
                    name='movingSize'
                    onChange={this.handleChange}
                    as='select'
                    className="w-select"

                  >
                  {this.movingSizeOptionsSelect()}
                  </select>
                </div>


                <div className="calculate-element">
                  <button className="calculate-button" type="submit">Calculate</button>
                </div>


            </form>


          </div>

        </div>

      )
  }
  }
}

export default Calculator
