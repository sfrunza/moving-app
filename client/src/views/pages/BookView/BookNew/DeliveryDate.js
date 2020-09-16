import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, colors, Grid, Typography, Radio, RadioGroup, FormControlLabel, Box, Button } from '@material-ui/core';
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

const DeliveryDate = ({ className, onNext, onChange, activeStep, setFormState, state, onBack, ...rest}) => {

  const classes = useStyles();
  const [selected, setSelected] = useState(false)
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Delivery date"
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2} justify='center'>
        <Grid item xs={12} sm={8} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <DatePicker
              disableToolbar
              autoOk
              disabled={true}
              orientation="landscape"
              variant="static"
              format="MM/DD/YYYY"
              disablePast
              style={{width: '100%'}}
              label="Delivery Date *"
              value={state.values.delivery_date || null}
              minDate={
                (state.values.moving_type === "Moving" || state.values.moving_type === "Loading Help" || state.values.moving_type === "Unloading Help" || state.values.moving_type === "Packing Only" || state.values.moving_type === "Inside Move") ?
                state.values.moving_date : state.values.delivery_date
              }
              onChange={date => {
                setFormState(formState => ({
                  ...formState,
                  values: {
                    ...formState.values,
                    delivery_date: date !== null ? date.format('MM/DD/YYYY') : ''
                  }
                }))
                onNext()
                }
              }
            />
          </CardBase>
        </Grid>
      </Grid>
      <Box
        mt={3}
        display="flex"
      >
        {onBack && (
          <Button
            onClick={ date => {
              setFormState(formState => ({
                ...formState,
                values: {
                  ...formState.values,
                  delivery_date: ''
                }
              }))
              onBack()
              }
            }
            size="large"
          >
            Previous
          </Button>
        )}

      </Box>

    </div>
  );
};

DeliveryDate.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default DeliveryDate;
