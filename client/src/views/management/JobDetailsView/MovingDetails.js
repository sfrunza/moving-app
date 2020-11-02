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
import GridGallery from './GridGallery'

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

function MovingDetails({ job, className, images, setImages, handleDeleteImage, ...rest }) {
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
      <CardHeader title="Move Overview" />
      {initMap()}

      <CardContent className={classes.content}>
        <Box className={classes.headerDistance}>{distance}</Box>
        <Divider />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Moving Date: </TableCell>
              <TableCell style={{fontWeight: 'bold'}}>
                {job.job.delivery_date ? <Box>{moment(job.job.pick_up_date, 'MM/DD/YYYY').format("MMM DD, YYYY")} <span style={{fontSize: '12px', marginLeft: '10px', fontWeight: 300}}>to storage</span></Box> : moment(job.job.pick_up_date, 'MM/DD/YYYY').format("MMM DD, YYYY") }
              </TableCell>
            </TableRow>
            {
              (job.job.delivery_date === null )
              ?
              null
              :
                <TableRow>
                  <TableCell>Delivery Date: </TableCell>
                  <TableCell style={{fontWeight: 'bold'}}>
                    {moment(job.job.delivery_date, 'MM/DD/YYYY').format("MMM DD, YYYY")}
                  </TableCell>
                </TableRow>
            }
            <TableRow>
              <TableCell>Moving From: </TableCell>
              <TableCell>
                <Box>
                  <Button
                    style={{padding: '0px'}}
                    onClick={()=> console.log('clicked')}
                  >
                    {job.origin.address}
                  </Button>
                </Box>
                <Box component="div" display="inline" style={{fontWeight: 'bold'}}>*{job.origin.floor}</Box>
                <Box component="div" display="inline" ml={2}>Apt# {job.origin.apt_number}</Box>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Moving To:</TableCell>
              <TableCell>
                <Box>
                  <Button
                    style={{padding: '0px'}}
                    onClick={()=> console.log('clicked')}
                  >
                    {job.destination.address}
                  </Button>
                </Box>
                <Box component="div" display="inline" style={{fontWeight: 'bold'}}>*{job.destination.floor}</Box>
                <Box component="div" display="inline" ml={2}>Apt# {job.destination.apt_number}</Box>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{padding: '0px'}}><Divider /></TableCell>
              <TableCell style={{padding: '0px'}}><Divider /></TableCell>
            </TableRow>

            <TableRow >
              <TableCell>Moving Type:</TableCell>
              <TableCell>
                {job.job.job_type}
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Moving Size:</TableCell>
              <TableCell style={{fontWeight: 600}}>
                {job.job.job_size}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{padding: '0px'}}><Divider /></TableCell>
              <TableCell style={{padding: '0px'}}><Divider /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell >Crew:</TableCell>
              <TableCell style={{fontWeight: 600}}>
                {job.job.crew_size} Movers
              </TableCell>
            </TableRow>

            <TableRow >
              <TableCell >Rate:</TableCell>
              <TableCell style={{color: deepPurple['A200'], fontSize: '18px', fontWeight: 'bold'}}>
                <label >$ {job.job.job_rate}</label> / hr <label style={{color: 'grey', fontSize: '12px', fontStyle: 'italic', fontWeight: 'normal'}}> - billed in 15 minutes increment</label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell >Estimated Time:</TableCell>
              <TableCell style={{color: '#FD7013', fontSize: '18px', fontWeight: 'bold'}}>
                <label>{job.job.estimated_time}</label> hours*
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell >Travel Time:</TableCell>
              <TableCell>
                <label>{job.job.travel_time} (from/to HQ)</label>
              </TableCell>
            </TableRow>

            <TableRow >
              <TableCell >Estimated Quote:</TableCell>
              <TableCell style={{fontWeight: 600, fontSize: '18px'}}>
                <label>{job.job.estimated_quote}</label>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box mt={2} className={classes.addInfoContainer}>
          <Box className={classes.addInfoTitle}>
            Additional Information:
          </Box>
          <Box mt={2} className={classes.addInfoSubTitle}>
            {job.job.additional_info}
            <GridGallery images={images} handleDeleteImage={handleDeleteImage}/>
            <Uploader jobId={job.job.id} images={images} setImages={setImages}/>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

MovingDetails.propTypes = {
  className: PropTypes.string,
};

export default MovingDetails;
