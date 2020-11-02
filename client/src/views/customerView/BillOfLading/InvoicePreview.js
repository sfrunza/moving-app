import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(() => ({
  root: {}
}));

function InvoicePreview({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Paper
      className={clsx(classes.root, className)}
      {...rest}
    >
    invoice preview
    </Paper>
  );
}

InvoicePreview.propTypes = {
  className: PropTypes.string,
  invoice: PropTypes.object.isRequired
};

export default InvoicePreview;
