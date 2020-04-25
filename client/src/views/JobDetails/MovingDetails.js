import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MovingResult from './MovingResult'
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
  const submitted = true
  const classes = useStyles();
  const apiKey = 'AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ'
  const google = window.google = window.google ? window.google : {}

  const findTravelTime = () => {
    let officeHome = "Boston, MA";
    let service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [officeHome],
      destinations: [job.origin.address, job.destination.address],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, function(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        let outputTime = document.getElementById('travelTime');
        let timeTo = ''
        let timeFrom = ''
          let results = response.rows[0].elements;
            if(response.rows[0].elements[0].status !== "ZERO_RESULTS" && response.rows[0].elements[1].status !== "ZERO_RESULTS"){
              if(results[0].distance.value < 38000){
                timeTo = '20 min'
              }
                else {
                timeTo = Math.round((results[0].duration.value / 60) / 10) * 10 + ' min'
                console.log(results[0].duration.value);
              }
              if(results[1].distance.value < 38000 ){
               timeFrom = '20 min'
             }
                else {
               timeFrom = Math.round((results[0].duration.value / 60) / 10) * 10 + ' min'
             }

              return outputTime.innerHTML =`${timeTo} / ${timeFrom}`
              }
      }
    });

  }


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
        withScriptjs,
        withGoogleMap,
        lifecycle({
          componentDidMount() {
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
                    <TableCell style={{textAlign: 'center'}}>
                      {job.origin.address}
                      <div>
                        <p style={{fontWeight: 'bold', marginTop: '5px'}}>*{job.origin.house_type_from}</p>
                      </div>
                    </TableCell>
                    <TableCell style={{textAlign: 'center'}}>
                      {job.destination.address}
                      <div>
                        <p style={{fontWeight: 'bold', marginTop: '5px'}}>*{job.destination.house_type_to}</p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow selected>
                    <TableCell >Moving Type</TableCell>
                    <TableCell>
                      {job.job.move_type}
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Moving Size</TableCell>
                    <TableCell>
                      {job.job.move_size}
                    </TableCell>
                  </TableRow>
                  <TableRow selected>
                    <TableCell>Comments</TableCell>
                    <TableCell>
                      {job.customer.additional_info}
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>Travel Time</TableCell>
                    <TableCell>
                      <div id="travelTime">{findTravelTime()}</div>
                    </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
            <MovingResult
                    submitted={submitted}
                    movingSize={job.job.move_size}
                    typeFrom={job.origin.house_type_from}
                    typeTo={job.destination.house_type_to}
                    />
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
