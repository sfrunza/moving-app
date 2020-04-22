import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox"
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

class EmployeesIndexContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      columns: [
        { title: 'ID', field: 'id', type: 'numeric', editable: 'disabled' },
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
        {
          title: 'Role',
          field: 'role',
          lookup: { 'manager': 'manager', 'foreman': "foreman", 'driver': 'driver', 'helper': 'helper' }
        }

      ]
    };
    this.addNewEmployee = this.addNewEmployee.bind(this)
    this.deleteEmployee = this.deleteEmployee.bind(this)
    this.updateEmployee = this.updateEmployee.bind(this)
  }
  componentWillUnmount() {
    this.setState({
      employees: []
    })
 }

 handleFormSubmit(first_name, last_name, role){
   let body = JSON.stringify({employee: {first_name: first_name, last_name: last_name, role: role} })
   fetch('http://localhost:3001/api/v1/employees', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: body,
   }).then((response) => {
     return response.json()})
   .then((employee)=>{
     this.addNewEmployee(employee)
   })
 }

  addNewEmployee(employee){
    this.setState({
      employees: this.state.employees.concat(employee)
    })
  }

  handleDelete(id){
   fetch(`http://localhost:3001/api/v1/employees/${id}`,
   {
     method: 'DELETE',
     headers: {
       'Content-Type': 'application/json'
     }
   }).then((response) => {
       this.deleteEmployee(id)
     })
 }

  deleteEmployee(id){
    let newEmployee = this.state.employees.filter((employee) => employee.id !== id)
    this.setState({
      employees: newEmployee
    })
  }

  handleUpdate(employee){
    fetch(`http://localhost:3001/api/v1/employees/${employee.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({employee: employee}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateEmployee(employee)
      })
  }

  updateEmployee(employee){
    let newEmployee = this.state.employees.filter((f) => f.id !== employee.id)
    newEmployee.push(employee)
    this.setState({
      employees: newEmployee
    })
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/employees.json')
      .then((response) => {
        return response.json()})
      .then((data) => {
        this.setState({ employees: data }) });
  }

render(){

  return (
    <MaterialTable
      localization={{ body: { editRow: { deleteText: "Are you sure you want to delete this Employee?" } } }}
      icons={{
            Add: forwardRef((props, ref) => (
                <AddBox style={{color: "#5CB860"}}/>
            )),
            Edit: forwardRef((props, ref) => (
                <EditIcon style={{color: "#FFA21A"}}/>
            )),
            Delete: forwardRef((props, ref) => (
                <DeleteOutlineIcon style={{color: "red"}}/>
            )),
            Check: forwardRef((props, ref) => (
                <CheckIcon style={{color: "#5CB860"}}/>
            )),
            Clear: forwardRef((props, ref) => (
                <ClearIcon style={{color: "red"}}/>
            ))
          }}
      title="Employees Table"
      columns={this.state.columns}
      data={this.state.employees}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              this.handleFormSubmit(newData.first_name, newData.last_name, newData.role)
                resolve();
            }, 600);
          }),
        onRowUpdate: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              this.handleUpdate(newData)
            resolve();
            }, 600);
          }),
        onRowDelete: (oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            this.handleDelete(oldData.id)
          }, 600);
        })
      }}
      onRowClick={(event, rowData, togglePanel) => {
        this.props.history.push(`/admin/employees/${rowData.id}`);
        }
      }
    style={{width: "auto", maxWidth: "1000px", margin: "5rem auto 0 auto"}}/>
  );
  }


}

export default EmployeesIndexContainer
