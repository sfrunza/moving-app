import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {paddingTop: '60px'}
}));

function Toolbar({
  date,
  view,
  onDatePrev,
  onDateNext,
  onEventAdd,
  onViewChange,
  onDateToday,
  className,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      {...rest}
      alignItems="center"
      container
      justify="space-between"
      spacing={3}
    >
      <Grid item>
        <ButtonGroup size="small">
          <Button onClick={onDatePrev}>Prev</Button>
          <Button onClick={onDateToday}>Today</Button>
          <Button onClick={onDateNext}>Next</Button>
        </ButtonGroup>
      </Grid>
        <Grid item style={{flex: '0 0 55%'}}>
          <Typography
            variant="h3"
            color="textPrimary"
          >
            {moment(date).format('MMMM YYYY')}
          </Typography>
        </Grid>
    </Grid>
  );
}

Toolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  date: PropTypes.any.isRequired,
  onDateNext: PropTypes.func,
  onDatePrev: PropTypes.func,
  onDateToday: PropTypes.func,
  onEventAdd: PropTypes.func,
  onViewChange: PropTypes.func,
  view: PropTypes.string.isRequired
};

export default Toolbar;
