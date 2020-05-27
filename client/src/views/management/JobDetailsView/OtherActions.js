import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles((theme) => ({
  root: {},
  deleteAction: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  actionIcon: {
    marginRight: theme.spacing(1)
  },
  cardHeader: {
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
  },
  arrow: {
    marginLeft: 'auto'
  }
}));

function OtherActions({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="HELPFUL LINKS" className={classes.cardHeader}/>
      <Divider />
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Button className={classes.button}>
            <HistoryIcon className={classes.actionIcon} />
            My Moves History{' '}(1)
            <ArrowForwardIosIcon className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>
          <Button className={classes.button}>
            <BeachAccessIcon className={classes.actionIcon} />
            Insurance
            <ArrowForwardIosIcon className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>
          <Button className={classes.button}>
            <FileCopyIcon className={classes.actionIcon} />
            Bill of Lading
            <ArrowForwardIosIcon className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>
        </Box>
        <Box
          mt={1}
          mb={2}
        >
          <Typography
            variant="body2"
            color="textSecondary"
          >
            Remove this customer’s data if he requested that, if not please
            be aware that what has been deleted can never brough back
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
