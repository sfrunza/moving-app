import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  colors,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
  useMediaQuery,
  Grid
} from '@material-ui/core';
import { Icon } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import { Section, CardBase } from 'src/components/organisms';
import { Link as RouterLink } from 'react-router-dom';
import PricingTable from './PricingTable';
import MyButton from 'src/components/MyButton'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f5f7ff',
    boxShadow: 'none',
    padding: theme.spacing(10, 0),
    borderRadius: theme.spacing(1),
    margin: theme.spacing(10, 0),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(12, 0),
    },
  },
  textPurple: {
    color: theme.palette.secondary.main,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const PricingTableMain = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(className)} {...rest} >
        <Grid className={classes.root}>
          <SectionHeader
            title="Pricing table"
            subtitle="See the table below for fixed hourly rates."
            subtitleProps={{
              variant: 'body1',
              color: 'textSecondary',
            }}
            fadeUp
          />
        <PricingTable />
          <div className={classes.inputContainer}>
            <MyButton
              variant="contained"
              color="secondary"
              size={isMd ? 'large' : 'medium'}
              to='/book'
              text='Get your quote online'
            />
          </div>
        </Grid>
    </div>
  );
};

PricingTableMain.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default PricingTableMain;
