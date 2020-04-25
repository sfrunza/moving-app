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
      errors: {},
      errorStyle: {
        first_name: false,
        last_name: false,
        email: false,
        phone: false,
        originAddress: false,
        destinationAddress: false,
        originSelectHouseType: false,
        destinationSelectHouseType: false,
        moveSize: false,
        pick_up_date: false
      }
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
          let newId;
          if (data.length === 0 ) {
            newId = 1
          } else {
            newId = data[0].id + 1
          }
          this.setState({ id: newId })
        });
  }

  onChangeJob(updatedJob) {
    this.setState({
      job: {
          ...this.state.job,
          ...updatedJob
        }
      });
  }

  onChangeCustomer(updatedCustomer) {
    this.setState({
      customer: {
          ...this.state.customer,
          ...updatedCustomer
        }
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

  handleValidation(){
        let customer = this.state.customer;
        let origin = this.state.origin;
        let destination = this.state.destination;
        let job = this.state.job;
        let errors = {};
        let formIsValid = true;

        let errorCopy = JSON.parse(JSON.stringify(this.state.errorStyle))

        //First Name
        if(!customer["first_name"]){
           formIsValid = false;
           errors["first_name"] = "Cannot be empty";
           errorCopy.first_name = true
           this.setState({
              errorStyle:errorCopy
            })
        } else {
          errorCopy.first_name = false
          this.setState({
             errorStyle:errorCopy
           }) }

        //Last Name
        if(!customer["last_name"]){
           formIsValid = false;
           errors["last_name"] = "Cannot be empty";
           errorCopy.last_name = true
           this.setState({
              errorStyle:errorCopy
            })
        } else {
          errorCopy.last_name = false
          this.setState({
             errorStyle:errorCopy
           }) }

        //Email
        if(!customer["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
           errorCopy.email = true
           this.setState({
              errorStyle:errorCopy
            })
        } else {
          errorCopy.email = false
          this.setState({
             errorStyle:errorCopy
           })
        }

        if(typeof customer["email"] !== "undefined"){
           let lastAtPos = customer["email"].lastIndexOf('@');
           let lastDotPos = customer["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && customer["email"].indexOf('@@') === -1 && lastDotPos > 2 && (customer["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
              errorCopy.email = true
              this.setState({
                 errorStyle:errorCopy
               })
            } else {
              errorCopy.email = false
              this.setState({
                 errorStyle:errorCopy
               })
            }
       }
       //Phone
       if(!customer["phone"]){
          formIsValid = false;
          errors["phone"] = "Cannot be empty";
          errorCopy.phone = true
          this.setState({
             errorStyle:errorCopy
           })
        } else {
         errorCopy.phone = false
         this.setState({
            errorStyle:errorCopy
          })
        }
        //Origin Address
        if(!origin["address"]){
           formIsValid = false;
           errors["originAddress"] = "Cannot be empty";
           errorCopy.originAddress = true
           this.setState({
              errorStyle:errorCopy
            })
         } else {
          errorCopy.originAddress = false
          this.setState({
             errorStyle:errorCopy
           })
         }
         //house types
         if(!origin["house_type_from"]){
            formIsValid = false;
            errorCopy.originSelectHouseType = true
            this.setState({
               errorStyle:errorCopy
             })
          } else {
           errorCopy.originSelectHouseType = false
           this.setState({
              errorStyle:errorCopy
            })
          }

         //Destination Address
         if(!destination["address"]){
            formIsValid = false;
            errors["destinationAddress"] = "Cannot be empty";
            errorCopy.destinationAddress = true
            this.setState({
               errorStyle:errorCopy
             })
          } else {
           errorCopy.destinationAddress = false
           this.setState({
              errorStyle:errorCopy
            })
          }
          //house types
          if(!destination["house_type_to"]){
             formIsValid = false;
             errorCopy.destinationSelectHouseType = true
             this.setState({
                errorStyle:errorCopy
              })
           } else {
            errorCopy.destinationSelectHouseType = false
            this.setState({
               errorStyle:errorCopy
             })
           }
           //move size
           if(!job["move_size"]){
              formIsValid = false;
              errorCopy.moveSize = true
              this.setState({
                 errorStyle:errorCopy
               })
            } else {
             errorCopy.moveSize = false
             this.setState({
                errorStyle:errorCopy
              })
            }
            // pick up date
            if(!job["pick_up_date"]){
               formIsValid = false;
               errorCopy.pick_up_date = true
               this.setState({
                  errorStyle:errorCopy
                })
             } else {
              errorCopy.pick_up_date = false
              this.setState({
                 errorStyle:errorCopy
               })
             }


       this.setState({errors: errors});
       return formIsValid;
   }

  handleSubmit(e) {
    e.preventDefault();

    if(this.handleValidation()){
      fetch('http://localhost:3001/api/v1/jobs.json',{
                method: "POST",
                body: JSON.stringify(this.state.job),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              })

            fetch('http://localhost:3001/api/v1/customers.json',{
                method: "POST",
                body: JSON.stringify(this.state.customer),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              })

            fetch('http://localhost:3001/api/v1/origins.json',{
                method: "POST",
                body: JSON.stringify(this.state.origin),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              })

            fetch('http://localhost:3001/api/v1/destinations.json',{
                method: "POST",
                body: JSON.stringify(this.state.destination),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              })

            this.setState({ submitted: true })
        }
    // if (
    //     Object.values(this.state.customer).includes("") === true ||
    //     this.state.customer.hasOwnProperty('first_name') === false ||
    //     this.state.customer.hasOwnProperty('last_name') === false ||
    //     this.state.customer.hasOwnProperty('phone') === false ||
    //     this.state.customer.hasOwnProperty('email') === false
    //     )
    //     {
    //
    //       this.setState({ submitted: false, errorMessage: 'Plese fill out the rquired fields', customer:{first_nameError: true,
    //       last_nameError: true,
    //       emailError: true,
    //       phoneError: true,}})
    //
    //     } else {
    //
    //       fetch('http://localhost:3001/api/v1/jobs.json',{
    //           method: "POST",
    //           body: JSON.stringify(this.state.job),
    //           headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //         })
    //
    //       fetch('http://localhost:3001/api/v1/customers.json',{
    //           method: "POST",
    //           body: JSON.stringify(this.state.customer),
    //           headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //         })
    //
    //       fetch('http://localhost:3001/api/v1/origins.json',{
    //           method: "POST",
    //           body: JSON.stringify(this.state.origin),
    //           headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //         })
    //
    //       fetch('http://localhost:3001/api/v1/destinations.json',{
    //           method: "POST",
    //           body: JSON.stringify(this.state.destination),
    //           headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //         })
    //
    //       this.setState({ submitted: true })
    //     }
  }

  render() {

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

        <Card style={{display: 'flex', flexDirection: 'column', height: '50rem', margin: '25px 0px'}}>
          <CardHeader title="Project cover" />
          <CardContent style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} style={{display: 'flex', flexDirection: 'column'}}>
              <Grid container justify="space-around" style={{flexDirection: 'column', textAlign: 'center', height: '100%'}}>
              <div style={{margin: '0px 2rem'}}><h3>Moving Details</h3></div>

                <FormControl>
                  <div>
                    <JobDescriptionForm onChange={job => this.onChangeJob(job)} errorStyle={this.state.errorStyle}/>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'auto', maxWidth: '783px', justifyContent: 'space-between', margin: 'auto'}}>
                      <OriginForm id={this.state.id} onChangeOrigin={origin => this.onChangeOrigin(origin)} errors={this.state.errors} errorStyle={this.state.errorStyle}
                      />
                      <DestinationForm id={this.state.id} onChangeDestination={destination => this.onChangeDestination(destination)} errors={this.state.errors} errorStyle={this.state.errorStyle} />
                    </div>
                  </div>
                  <div style={{margin: '3em 0rem 2em 0em'}}><h3>Customer Details</h3></div>
                  <CustomerForm id={this.state.id} onChange={customer => this.onChangeCustomer(customer)} errors={this.state.errors} errorStyle={this.state.errorStyle}/>
                  <div className="button-group" style={{margin: '1em 0px'}}>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                      Submit
                    </Button>
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
