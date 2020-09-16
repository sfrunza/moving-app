import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, colors, Grid, Typography, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { SectionHeader } from 'src/components/molecules';
import { CardBase } from 'src/components/organisms';
import { DatePicker } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {},
  cardBase: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  icon: {
    fontSize: 60,
    color: colors.indigo[900],
    [theme.breakpoints.up('sm')]: {
      fontSize: 80,
    },
  },
  title: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
    },
  },
  displayBlock: {
    display: 'contents',
    '& > span > span': {
      display: 'none',
    }
  },
}));

const MovingDate = ({ className, onNext, onChange, state, setFormState, ...rest}) => {

  const classes = useStyles();
  const [selected, setSelected] = useState(false)
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });


  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Moving date"
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2} justify="center">
        <Grid item xs={12} sm={8} container data-aos="fade-up" justify="center">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <DatePicker
              disableToolbar
              autoOk
              disabled={true}
              orientation="landscape"
              variant="static"
              openTo="date"
              format="MM/DD/YYYY"
              disablePast
              style={{width: '100%'}}
              label="Move Date *"
              value={state.values.moving_date || null}
              onChange={date => {
                setFormState(formState => ({
                  ...formState,
                  values: {
                    ...formState.values,
                    moving_date: date !== null ? date.format('MM/DD/YYYY') : ''
                  }
                }))
                onNext()
                }
              }
            />
          </CardBase>
        </Grid>
      </Grid>
    </div>
  );
};

MovingDate.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MovingDate;
