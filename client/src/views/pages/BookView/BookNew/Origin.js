import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, colors, Grid, Box, Button, TextField } from '@material-ui/core';
import { SectionHeader } from 'src/components/molecules';
import { CardBase } from 'src/components/organisms';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Formik, Field, getIn } from 'formik';

const useStyles = makeStyles(theme => ({
  root: {},
  cardBase: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  icon: {
    position: 'relative',
    top: '3px'
  },
  title: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
    },
  },
  autocompleteContainer: {
    '& div:last-child': {
      marginBottom: theme.spacing(4),
    }
  },
  autocompleteRoot: {
    width: '100%',
  },
  textField: {
    width: '100%',
  },
  googleCont: {
    justifyContent: 'flex-end',
    margin: 'auto',
    position: 'inherit',
    paddingBottom: '2em',
  }
}));

const Origin = ({ className, onNext, onChange, setFormState, state, onBack, ...rest}) => {

  const classes = useStyles();
  const [selected, setSelected] = useState(false)
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleChange = address => {
      setFormState(formState => ({
        ...formState,
        values: {
          ...formState.values,
          origin_address: address,
        }
      }))
    };

    const validateAddress = (value) => {
      let error;
      if (value === '') {
        error = 'Required';
      }
      return error;
    }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Origin address"
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2} justify='center'>
        <Grid item container xs={12} sm={8} data-aos="fade-up" justify="center">
          <CardBase withShadow  className={classes.cardBase}>


            <PlacesAutocomplete
              value={state.values.origin_address || ''}
              onChange={handleChange}
            >
              {({ getInputProps, getSuggestionItemProps, suggestions }) => {
                const additionalProps = {
                  name: "origin_address",
                  className: 'form-input__field',
                };
                const text = () => { return(<Grid item >powered by </Grid>)}
                const icon = () => { return(<img src="https://cdn.worldvectorlogo.com/logos/google-2015.svg" style={{width: '60px', marginLeft: '5px'}}/>)}

                const autocompleteInputProps = getInputProps(additionalProps);
                return (

                  <div className={classes.autocompleteRoot}>
                      <TextField
                        {...autocompleteInputProps}
                        label="Origin Address"
                        variant="outlined"
                        placeholder="Type Full Address"
                        className={classes.textField}

                      />
                      <div className={classes.autocompleteContainer}>
                        {suggestions.map((suggestion, i) => {
                           const style = {
                            backgroundColor: suggestion.active ? '#e0e0e0' : '#fff',
                            cursor: 'pointer',
                            padding: '10px',
                            fontSize: '14px',
                            borderBottom: '1px solid #b7b7b7',
                            alignItems: 'center',
                          }
                          return (
                              <div {...getSuggestionItemProps(suggestion, { style })} key={i} >
                                <LocationOnIcon className={classes.icon}/><span>{suggestion.formattedSuggestion.mainText}</span>,{" "}{suggestion.formattedSuggestion.secondaryText}
                              </div>
                          )
                        })}
                      </div>
                      {
                        suggestions.length != 0 ?
                        <Grid item container className={classes.googleCont}>
                            {text()}
                          <Grid item>
                            {icon()}
                          </Grid>
                        </Grid> : null
                      }
                  </div>
                );
              }}
            </PlacesAutocomplete>

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
                  origin_address: ''
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
        <Box flexGrow={1} />
        <Button
          color="secondary"
          type="submit"
          variant="contained"
          size="large"
          onClick={onNext}
        >
          Next
        </Button>

      </Box>

    </div>
  );
};

Origin.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Origin;
