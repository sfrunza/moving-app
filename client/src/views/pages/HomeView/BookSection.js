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
import MyButton from 'src/components/MyButton'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f5f7ff',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    padding: theme.spacing(15, 2),
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
  },
  textPurple: {
    color: theme.palette.secondary.main,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const BookSection = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(className)} {...rest}>
        <Grid className={classes.root}>
          <SectionHeader
            title="We make moving easy"
            subtitle={
              <span className={classes.textPurple}>
                Our quick application process takes only 2 minutes. No credit card required.
              </span>
            }
            subtitleProps={{
              variant: 'body1'
            }}
            fadeUp
          />
          <div className={classes.inputContainer}>
            <MyButton
              variant="contained"
              size={isMd ? 'large' : 'medium'}
              color="secondary"
              to='/book'
              text="Get your quote online"
            />
          </div>
        </Grid>
    </div>
  );
};

BookSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default BookSection;
