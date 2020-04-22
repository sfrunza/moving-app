import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  }
}));

function MovingDetails({ job, className, ...rest }) {
  const classes = useStyles();
  const apiKey = 'AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ'
  const google = window.google = window.google ? window.google : {}

  const renderMap = () => {
      let origin = job.origin.address
      let destination = job.destination.address
      const MapWithADirectionsRenderer = compose(
        withProps({
          googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `200px`, width: `95%`, margin: `auto` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap,
        lifecycle({
          componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();
            let origin_point = origin
            let destination_poin = destination
            DirectionsService.route({
              origin: origin_point,
              destination: destination_poin,
              travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                });
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
        <MapWithADirectionsRenderer google={window.google}/>
      )
  }


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Moving Details" />
      {renderMap()}
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{textAlign: 'center'}}>Moving From</TableCell>
                  <TableCell style={{textAlign: 'center'}}>Moving To</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow key={job.job.id}>
                    <TableCell style={{textAlign: 'center'}}>{job.origin.address}</TableCell>
                    <TableCell style={{textAlign: 'center'}}>{job.destination.address}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
}

MovingDetails.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired
};

export default MovingDetails;
