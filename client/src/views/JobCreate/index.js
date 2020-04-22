import React, { Component } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Card, CardHeader, CardContent, FormControl, Button } from '@material-ui/core';
import CustomerForm from './CustomerForm'
import OriginForm from './OriginForm'
import DestinationForm from './DestinationForm'
import JobDescriptionForm from './JobDescriptionForm'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      job: {},
      origin: {},
      destination: {},
      customer: {},
      id: null,
      submitted: false,
      errorMessage: ""
    }
    this.onChangeJob = this.onChangeJob.bind(this)
    this.onChangeOrigin = this.onChangeOrigin.bind(this)
    this.onChangeDestination = this.onChangeDestination.bind(this)
    this.onChangeCustomer = this.onChangeCustomer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  componentWillMount() {
      fetch('http://localhost:3001/api/v1/jobs.json')
        .then((response) => {
          return response.json()})
        .then((data) => {
          let newId = data[0].id + 1
          this.setState({ id: newId })
        });
  }

  onChangeJob(updatedJob) {
    this.setState({
      job: {
          ...this.state.job,
          ...updatedJob
        }
       })
  }

  onChangeCustomer(updatedCustomer) {
    this.setState({
      customer: {
          ...this.state.customer,
          ...updatedCustomer
        },
        errorMessage: null
      });
  }

  onChangeOrigin(updatedOrigin) {
    this.setState({
      origin: {
          ...this.state.origin,
          ...updatedOrigin
        }
       })
  }

  onChangeDestination(updatedDestination) {
    this.setState({
        destination: {
          ...this.state.destination,
          ...updatedDestination
        }
       })

  }

  handleSubmit(e) {
    e.preventDefault();
    if(Object.entries(this.state.customer).length < 9){
      this.setState({ submitted: false, errorMessage: 'Plese fill out the rquired fields'})
    } else {
    fetch('http://localhost:3001/api/v1/jobs.json',{
        method: "POST",
        body: JSON.stringify(this.state.job),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })

    fetch('http://localhost:3001/api/v1/customers.json',{
        method: "POST",
        body: JSON.stringify(this.state.customer),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })

    fetch('http://localhost:3001/api/v1/origins.json',{
        method: "POST",
        body: JSON.stringify(this.state.origin),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })

    fetch('http://localhost:3001/api/v1/destinations.json',{
        method: "POST",
        body: JSON.stringify(this.state.destination),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })

    this.setState({ submitted: true })
  }

  }

  render() {
    console.log(this.state.customer);
    if(this.state.id === null) {
      return <div>loading...</div>
    } else if(this.state.submitted) {
      return (
        <Card style={{display: 'flex', flexDirection: 'column', height: '40rem', marginTop: '24px'}}>
          <CardHeader title="Project cover" />
          <CardContent style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} style={{display: 'flex', flexDirection: 'column'}}>
              <Grid container justify="space-around" style={{flexDirection: 'column', textAlign: 'center', height: '100%'}}>

              form submitted!
              </Grid>
            </MuiPickersUtilsProvider>
          </CardContent>
        </Card>
      )

    } else {
      return(

        <Card style={{display: 'flex', flexDirection: 'column', height: '40rem', marginTop: '24px'}}>
          <CardHeader title="Project cover" />
          <CardContent style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} style={{display: 'flex', flexDirection: 'column'}}>
              <Grid container justify="space-around" style={{flexDirection: 'column', textAlign: 'center', height: '100%'}}>

                <FormControl>
                  <div>
                    <JobDescriptionForm onChange={job => this.onChangeJob(job)} />
                    <CustomerForm id={this.state.id} onChange={customer => this.onChangeCustomer(customer)} />
                    <div style={{ display: 'flex', flexDirection: 'row', width: 'auto', maxWidth: '783px', justifyContent: 'space-between', margin: 'auto'}}>
                      <OriginForm id={this.state.id} onChangeOrigin={origin => this.onChangeOrigin(origin)} />
                      <DestinationForm id={this.state.id} onChangeDestination={destination => this.onChangeDestination(destination)} />
                    </div>
                  </div>
                  <div className="button-group">
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                      Submit
                    </Button>
                    <p style={{ color: 'red', marginTop: '2em'}}>{this.state.errorMessage}</p>
                  </div>
                </FormControl>
              </Grid>
            </MuiPickersUtilsProvider>
          </CardContent>
        </Card>
      );
    }
  }
}

export default FormContainer;
