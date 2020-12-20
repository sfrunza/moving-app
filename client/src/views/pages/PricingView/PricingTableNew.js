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
    padding: theme.spacing(4, 0),
    borderRadius: '24px',
  },
  textPurple: {
    color: theme.palette.secondary.main,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    borderRadius: '24px',
    marginTop: '2em',
  }
}));

const PricingTableNew = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(className)} {...rest} data-aos="fade-up">
        <Grid className={classes.root}>
          <SectionHeader
            title={
              <span>
                Pricing Table
              </span>
            }
            subtitle={
              <span>
                See the table below for fixed hourly rates.
              </span>
            }
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

PricingTableNew.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default PricingTableNew;
