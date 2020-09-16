import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, colors, Grid, Typography, Radio, RadioGroup, FormControlLabel, Box, Button } from '@material-ui/core';
import { SectionHeader } from 'src/components/molecules';
import { CardBase } from 'src/components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  cardBase: {
    '&:hover': {
      background: colors.indigo[900],
      cursor: 'pointer',
      '& .card-icon, & .card-title': {
        color: 'white',
      },
    },
  },
  icon: {
    fontSize: 50,
    color: colors.indigo[900],
    [theme.breakpoints.up('sm')]: {
      fontSize: 50,
    },
  },
  title: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  displayBlock: {
    display: 'contents',
    '& > span > span': {
      display: 'none',
    }
  },
  active: {
    background: colors.indigo[900],
    cursor: 'pointer',
    '& .card-icon, & .card-title': {
      color: 'white',
    },
  }
}));

const MovingType = ({ className, onNext, onChange, setFormState, state, onBack, ...rest}) => {

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Moving types"
        data-aos="fade-up"
      />

      <RadioGroup name="moving_type" onChange={onChange}>
      <Grid container spacing={isMd ? 1 : 1} >

        <Grid item xs={6} sm={4} data-aos="fade-up">
          <FormControlLabel
            control={<Radio value="Moving"/>}
            className={classes.displayBlock}
            onChange={onNext}
            label={

                <CardBase withShadow liftUp className={state.values.moving_type === "Moving" ? classes.active : classes.cardBase}>
                    <div>
                      <i
                        className={clsx(classes.icon, 'fas fa-truck', 'card-icon')}
                      />
                    </div>
                    <Typography
                      variant="h5"
                      color="textPrimary"
                      align="center"
                      noWrap
                      className={clsx(classes.title, 'card-title')}
                    >
                      Moving
                    </Typography>
                  </CardBase>

              }
            />
          </Grid>

          <Grid item xs={6} sm={4} data-aos="fade-up">
            <FormControlLabel
              control={<Radio value="Moving w/Storage" />}
              className={classes.displayBlock}
              onChange={onNext}
              label={

                  <CardBase withShadow liftUp className={state.values.moving_type === "Moving w/Storage" ? classes.active : classes.cardBase}>
                      <div>
                        <i
                          className={clsx(classes.icon, 'fas fa-warehouse', 'card-icon')}
                        />
                      </div>
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        align="center"
                        noWrap
                        className={clsx(classes.title, 'card-title')}
                      >
                        Moving w/Storage
                      </Typography>
                    </CardBase>

                }
              />
            </Grid>

            <Grid item xs={6} sm={4} data-aos="fade-up">
              <FormControlLabel
                value="Loading Help"
                control={<Radio />}
                className={classes.displayBlock}
                onChange={onNext}
                label={

                  <CardBase withShadow liftUp className={state.values.moving_type === "Loading Help" ? classes.active : classes.cardBase}>
                      <div>
                        <i
                          className={clsx(classes.icon, 'fas fa-truck-loading', 'card-icon')}
                        />
                      </div>
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        align="center"
                        noWrap
                        className={clsx(classes.title, 'card-title')}
                      >
                        Loading Help
                      </Typography>
                    </CardBase>

                  }
                />
              </Grid>

              <Grid item xs={6} sm={4} data-aos="fade-up">
                <FormControlLabel
                  value="Unloading Help"
                  control={<Radio/>}
                  className={classes.displayBlock}
                  onChange={onNext}
                  label={

                    <CardBase withShadow liftUp className={state.values.moving_type === "Unloading Help" ? classes.active : classes.cardBase}>
                        <div>
                          <i
                            className={clsx(classes.icon, 'fas fa-truck-loading', 'card-icon')}
                          />
                        </div>
                        <Typography
                          variant="h5"
                          color="textPrimary"
                          align="center"
                          noWrap
                          className={clsx(classes.title, 'card-title')}
                        >
                          Unloading Help
                        </Typography>
                      </CardBase>
                    }
                  />
                </Grid>

                <Grid item xs={6} sm={4} data-aos="fade-up">
                  <FormControlLabel
                    value="Inside Move"
                    control={<Radio/>}
                    className={classes.displayBlock}
                    onChange={onNext}
                    label={

                      <CardBase withShadow liftUp className={state.values.moving_type === "Inside Move" ? classes.active : classes.cardBase}>
                          <div>
                            <i
                              className={clsx(classes.icon, 'fas fa-people-carry', 'card-icon')}
                            />
                          </div>
                          <Typography
                            variant="h5"
                            color="textPrimary"
                            align="center"
                            noWrap
                            className={clsx(classes.title, 'card-title')}
                          >
                            Inside Move
                          </Typography>
                        </CardBase>

                      }
                    />
                  </Grid>

                  <Grid item xs={6} sm={4} data-aos="fade-up">
                    <FormControlLabel
                      value="Packing Only"
                      control={<Radio/>}
                      className={classes.displayBlock}
                      onChange={onNext}
                      label={

                        <CardBase withShadow liftUp className={state.values.moving_type === "Packing Only" ? classes.active : classes.cardBase}>
                            <div>
                              <i
                                className={clsx(classes.icon, 'fas fa-box-open', 'card-icon')}
                              />
                            </div>
                            <Typography
                              variant="h5"
                              color="textPrimary"
                              align="center"
                              noWrap
                              className={clsx(classes.title, 'card-title')}
                            >
                              Packing Only
                            </Typography>
                          </CardBase>

                        }
                      />
                  </Grid>

                </Grid>
              </RadioGroup>

              <Box
                mt={6}
                display="flex"
              >
                {onBack && (
                  <Button
                    onClick={ date => {
                      setFormState(formState => ({
                        ...formState,
                        values: {
                          ...formState.values,
                          moving_type: ''
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

MovingType.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MovingType;
