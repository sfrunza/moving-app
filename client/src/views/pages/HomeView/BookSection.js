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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    borderRadius: theme.spacing(2),
    boxShadow: 'none',
    padding: theme.spacing(12, 0),
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
  }
}));

const BookSection = props => {
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
                We make moving easy.
              </span>
            }
            subtitle={
              <span className={classes.textPurple}>
                Our quick application process takes only 2 minutes. No credit card required.
              </span>
            }
            fadeUp
          />
          <div className={classes.inputContainer}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              size={isMd ? 'large' : 'medium'}
              component={RouterLink}
              to='/book'
              >
              Get your quote online
            </Button>
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
