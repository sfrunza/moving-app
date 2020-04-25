import React, { Component } from 'react';
import CustomerShowTile from './CustomerShowTile'
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Tabs,
  Tab,
  Divider,
  colors
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';




class CostumerShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: []
    }

  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/v1/employees/${this.props.match.params.id}`)
      .then((response) => {
        return response.json()})
      .then((data) => {
        this.setState({ employee: data }) });
  }



  render() {


    return(
          <Page

            title="Customer Management Details"
          >
            <Container maxWidth={false}>
              <Header employee={this.state.employee}/>
              <Divider  />
              <div >
                <CustomerShowTile
                  first_name={this.state.employee.first_name}
                  last_name={this.state.employee.last_name}
                  role={this.state.employee.role}
                />
              </div>
            </Container>
          </Page>

        )
    }
}

export default CostumerShowContainer;
