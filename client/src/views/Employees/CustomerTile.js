import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomerTile = props => {

    return(

        <TableRow key={props.id} hover>
          <TableCell >{props.id}</TableCell>
          <TableCell component="th" scope="row" href={`/admin/employees/${props.id}`}>
            {props.first_name}
          </TableCell>
          <TableCell >{props.last_name}</TableCell>
          <TableCell >{props.role}</TableCell>
        </TableRow>
    )

}

export default CustomerTile;
