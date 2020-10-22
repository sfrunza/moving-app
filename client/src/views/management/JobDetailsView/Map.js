import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  Link,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@material-ui/core';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
import deepPurple from '@material-ui/core/colors/deepPurple';
import LoadingScreen from 'src/components/LoadingScreen';
import Uploader from './Uploader'
import Gallery from './Gallery'

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
    padding: '10px 0em',
  },
  addInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 15px',
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
    wordWrap: 'break-word',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '80px'
  }
}));

function Map({ job, className, ...rest }) {
  const submitted = true
  const classes = useStyles();
  const apiKey = 'AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ'
  const google = window.google = window.google ? window.google : {}
  const [distance, setDistance] = useState();

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
      {initMap()}
    </Card>
  );
}

Map.propTypes = {
  className: PropTypes.string,
};

export default Map;
