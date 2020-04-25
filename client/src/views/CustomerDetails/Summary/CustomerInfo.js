import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  colors,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Label from 'src/components/Label';
import CustomerEditModal from './CustomerEditModal';
import DeleteIcon from '@material-ui/icons/DeleteOutline';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    },
    justifyContent: 'space-around',
    marginTop: theme.spacing(3)
  },
  deleteButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  openDeleteButton: {
    color: colors.red[600],
    border: `1px solid ${colors.red[500]}`,
    '&:hover': {
      backgroundColor: colors.red[50],
    }
  },
  editButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

function CustomerInfo({ handleDelete, handleUpdate, customer, className, ...rest }) {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  const [open, setOpen] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  }

  const handleEditClose = () => {
    setOpenEdit(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatPhoneNumber = (phoneNumberString) => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Customer info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                {customer.email}
                <div>
                  <Label
                    color={
                      customer.verified ? colors.green[600] : colors.green[600]
                    }
                  >
                    {customer.verified
                      ? 'Email verified'
                      : 'Email verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Phone</TableCell>
              <TableCell>{formatPhoneNumber(customer.phone)}</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen} className={classes.editButton}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>

        <Button className={classes.openDeleteButton} onClick={handleClickOpen}>
        Delete Customer
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">
            Delete
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to permanently delete this customer?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button className={classes.deleteButton} onClick={() => {handleDelete(customer)}}>
              <DeleteIcon className={classes.buttonIcon} />
              Delete
            </Button>
          </DialogActions>
        </Dialog>





      </CardActions>
      <CustomerEditModal
        customer={customer}
        onClose={handleEditClose}
        open={openEdit}
        handleUpdate={handleUpdate}
      />
    </Card>
  );
}

CustomerInfo.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default CustomerInfo;
