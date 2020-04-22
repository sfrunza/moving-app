import React from 'react';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from "@material-ui/pickers";
import moment from 'moment'

class JobDescriptionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pick_up_date: new Date().setDate(new Date().getDate() + 1),
      delivery_date: new Date().setDate(new Date().getDate() + 1),
      status: 'Needs Attention',
      job_time: 1
    }

    this.handlePickupDate = this.handlePickupDate.bind(this)
    this.handleDeliveryDate = this.handleDeliveryDate.bind(this)
  }

  componentDidMount(){
    this.setState({  })
  }

  handlePickupDate(date) {
    this.setState({
      pick_up_date: date.toString()
    });
    this.props.onChange({ pick_up_date: date.toString(), status: this.state.status, job_time: this.state.job_time })
  };

  handleDeliveryDate(date) {
    this.setState({
      delivery_date: date.toString()
    });
    this.props.onChange({ delivery_date: date.toString() })
  };




 render() {
  return (
          <div style={{marginBottom: '2rem'}}>
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
            />
          </div>

  );
}
}

export default JobDescriptionForm;
