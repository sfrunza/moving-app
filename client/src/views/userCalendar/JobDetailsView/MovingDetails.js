import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MovingResult from './MovingResult'
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box
} from '@material-ui/core';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
import deepPurple from '@material-ui/core/colors/deepPurple';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  content: {
    padding: 0,
    '& .MuiTableCell-root': {
      borderBottom: 'none'
    }
  },
  headerDistance: {
    textAlign: 'center',
    fontFamily: 'Maison Neue Demi',
    padding: '10px 0em',
  },
  addInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 15px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  addInfoTitle: {
    fontSize: '14px',
    color: deepPurple['A200'],
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  addInfoSubTitle: {
    backgroundColor: '#f7f7f7',
    padding: '15px',
    wordWrap: 'break-word'
  }
}));

function MovingDetails({ job, className, ...rest }) {
  const submitted = true
  const classes = useStyles();
  const apiKey = 'AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ'
  const google = window.google = window.google ? window.google : {}
  const [distance, setDistance] = useState()
  const [travelTime, setTravelTime] = useState()

  const initMap = () => {
      let origin = job.origin.address
      let destination = job.destination.address
      const MapWithADirectionsRenderer = compose(
        withProps({
          googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `200px`, width: `95%`, margin: `auto` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withGoogleMap,
        lifecycle({
          componentDidMount() {
            const officeHome = "Boston, MA";

            //find travel time
            const findTravelTime = new google.maps.DistanceMatrixService();
            findTravelTime.getDistanceMatrix({
              origins: [officeHome],
              destinations: [origin, destination],
              travelMode: 'DRIVING',
              unitSystem: google.maps.UnitSystem.IMPERIAL,
              avoidHighways: false,
              avoidTolls: false
            }, function(response, status) {
              if (status !== 'OK') {
                alert('Error was: ' + status);
              } else {
                let timeTo = ''
                let timeFrom = ''
                let results = response.rows[0].elements;

                if(response.rows[0].elements[0].status !== "ZERO_RESULTS" && response.rows[0].elements[1].status !== "ZERO_RESULTS"){
                  if(results[0].distance.value < 20000 ){
                    timeTo = '20 min'
                  } else {
                    timeTo = Math.round((results[0].duration.value / 60) / 10) * 10 + ' min'
                  }
                  if(results[1].distance.value < 20000 ){
                    timeFrom = '20 min'
                  } else {
                      timeFrom = Math.round((results[1].duration.value / 60) / 10) * 10 + ' min'
                  }
                  setTravelTime(`${timeTo} / ${timeFrom}`)
                }
              }
            });

            //map with direction from pickup to delivery
            const DirectionsService = new google.maps.DirectionsService();
            DirectionsService.route({
              origin: origin,
              destination: destination,
              travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                });
                setDistance(result.routes[0].legs[0].distance.text)
              }
            });


          }
        })
      )(props =>
        <GoogleMap
          defaultZoom={7}
          defaultCenter={new google.maps.LatLng(42.5659907, -72.2317007)}
        >
          {props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>
      );
      return(
        <MapWithADirectionsRenderer google={google}/>
      )
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Moving Details" />
      {initMap()}

      <CardContent className={classes.content}>
        <Box className={classes.headerDistance}>{distance}</Box>
        <Divider />
        <MovingResult
            submitted={submitted}
            movingSize={job.job.move_size}
            typeFrom={job.origin.house_type}
            typeTo={job.destination.house_type}
            job={job}
            travelTime={travelTime}
        />
        <Box mt={2} className={classes.addInfoContainer}>
          <Box className={classes.addInfoTitle}>
            Additional Information:
          </Box>
          <Box mt={2} className={classes.addInfoSubTitle}>
            {job.customer.additional_info}
          </Box>
        </Box>

      </CardContent>
    </Card>
  );
}

MovingDetails.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired
};

export default MovingDetails;
