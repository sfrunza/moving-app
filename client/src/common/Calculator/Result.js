import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Container,
  Typography,
  makeStyles,
  Link,
  Grid,
  Paper,
  Divider,
  Button
} from '@material-ui/core';
import { deepPurple, amber, deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 12,
    minWidth: '720px',
    [theme.breakpoints.down('xs')]: {
      width: '98%',
      minWidth: '315px'
    },
  },
  browseButton: {
    padding: '10px 10px',
    borderRadius: '24px',
    display: 'flex',
    justifyContent: 'center',
    margin: '1em 0em auto',
    fontSize: '14px',
    textTransform: 'uppercase',
  },
  subHeader: {
    color: deepPurple['A200'],
    margin: '0px 5px',
    textTransform: 'capitalize',
  },
  link: {
    '&:hover' :{
      textDecoration: 'none'
    }
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '15px 0px'
  },
  backButton: {
    color: theme.palette.getContrastText(amber[500]),
    width: '100%',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#e4e4e4',
    },
  },
  nextButton: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    textAlign: 'center',
    '&:hover': {
      backgroundColor: deepPurple[700],
    },
  },
  header: {
    padding: '5px',
    // fontFamily: "Maison Neue Demi",
  },
  info: {
    fontSize: '20px',
    color: deepPurple[500],
  },
  infoMoney: {
    fontSize: '20px',
    color: deepOrange[500],
  },
  infoTime: {
    fontSize: '14px',
    color: deepPurple[500],
  },
  gridContainer: {
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  cityName: {
    display: 'inline-block',
    color: deepPurple[500],
  }
}));

function Result({ className, onClose, ...rest }) {
  const classes = useStyles();
  const google = window.google = window.google ? window.google : {}
  const [distance, setDistance] = useState()
  const [travelTime, setTravelTime] = useState()

  const officeHome = "2 Saint Paul St, Brookline, MA";

  //find travel time
  const findTravelTime = new google.maps.DistanceMatrixService();
  findTravelTime.getDistanceMatrix({
    origins: [officeHome],
    destinations: [rest.origin, rest.destination],
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

  const handleResult = (moveFrom, moveTo, sizeMove) => {

    let arr4 = [];
        arr4['elevator building'] = new Array()
        arr4['1st/Ground floor'] = new Array()
        arr4['2nd floor'] = new Array()
        arr4['3rd floor'] = new Array()
        arr4['4th floor'] = new Array()
        arr4['private house'] = new Array()
        arr4['storage unit'] = new Array()

        arr4['elevator building']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['elevator building']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['elevator building']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['elevator building']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['elevator building']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['elevator building']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['elevator building']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

        arr4['1st/Ground floor']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['1st/Ground floor']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['1st/Ground floor']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['1st/Ground floor']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['1st/Ground floor']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['1st/Ground floor']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['1st/Ground floor']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

        arr4['2nd floor']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['2nd floor']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['2nd floor']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['2nd floor']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['2nd floor']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['2nd floor']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['2nd floor']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

        arr4['3rd floor']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['3rd floor']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['3rd floor']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['3rd floor']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['3rd floor']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['3rd floor']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['3rd floor']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

        arr4['4th floor']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['4th floor']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['4th floor']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['4th floor']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['4th floor']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['4th floor']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['4th floor']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

        arr4['private house']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['private house']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['private house']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['private house']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['private house']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['private house']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['private house']['storage unit'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')

        arr4['storage unit']['elevator building'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['storage unit']['1st/Ground floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['storage unit']['2nd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['storage unit']['3rd floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['storage unit']['4th floor'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['storage unit']['private house'] = new Array('Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space')
        arr4['storage unit']['storage unit'] = ['Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space']


       arr4['elevator building']['elevator building']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['elevator building']['1st/Ground floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['elevator building']['2nd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['elevator building']['3rd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['elevator building']['4th floor']['Room or less (partial move)'] = returnFunction('3', 120, '3 - 5')
       arr4['elevator building']['private house']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['elevator building']['storage unit']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')

       arr4['elevator building']['elevator building']['Studio apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['elevator building']['1st/Ground floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['elevator building']['2nd floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['elevator building']['3rd floor']['Studio apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['elevator building']['4th floor']['Studio apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['elevator building']['private house']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['elevator building']['storage unit']['Studio apartment'] = returnFunction('2', 80, '2 - 4')

       arr4['elevator building']['elevator building']['1 Bedroom apartment'] = returnFunction('2', 80, '4 - 6')
       arr4['elevator building']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction('2', 80, '4 - 6')
       arr4['elevator building']['2nd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['elevator building']['3rd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['elevator building']['4th floor']['1 Bedroom apartment'] = returnFunction('3', 120, '6 - 8')
       arr4['elevator building']['private house']['1 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['elevator building']['storage unit']['1 Bedroom apartment'] = returnFunction('3', 80, '3 - 5')

       arr4['elevator building']['elevator building']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['elevator building']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['elevator building']['2nd floor']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['elevator building']['3rd floor']['2 Bedroom apartment'] = returnFunction('4', 160, '5 - 7')
       arr4['elevator building']['4th floor']['2 Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['elevator building']['private house']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['elevator building']['storage unit']['2 Bedroom apartment'] = returnFunction('3', 80, '4 - 6')

       arr4['elevator building']['elevator building']['3+ Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['elevator building']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['elevator building']['2nd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['elevator building']['3rd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '7 - 9')
       arr4['elevator building']['4th floor']['3+ Bedroom apartment'] = returnFunction('5', 200, '7 - 9')
       arr4['elevator building']['private house']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['elevator building']['storage unit']['3+ Bedroom apartment'] = returnFunction('4', 80, '5 - 7')

       arr4['elevator building']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['elevator building']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '4 - 6')
       arr4['elevator building']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['elevator building']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['elevator building']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['elevator building']['private house']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['elevator building']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction('3', 120, '5 - 7')

       arr4['elevator building']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '8 - 10')
       arr4['elevator building']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['elevator building']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['elevator building']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['elevator building']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['elevator building']['private house']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['elevator building']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')

       arr4['elevator building']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['elevator building']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['elevator building']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['elevator building']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '9 - 11')
       arr4['elevator building']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '10 - 12')
       arr4['elevator building']['private house']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['elevator building']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')

       arr4['elevator building']['elevator building']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['elevator building']['1st/Ground floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['elevator building']['2nd floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['elevator building']['3rd floor']['Office / Commercial space'] = returnFunction('4', 160, '4 - 6')
       arr4['elevator building']['4th floor']['Office / Commercial space'] = returnFunction('4', 160, '5 - 7')
       arr4['elevator building']['private house']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['elevator building']['storage unit']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')



       arr4['1st/Ground floor']['elevator building']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['1st/Ground floor']['1st/Ground floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['1st/Ground floor']['2nd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['1st/Ground floor']['3rd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['1st/Ground floor']['4th floor']['Room or less (partial move)'] = returnFunction('3', 120, '3 - 5')
       arr4['1st/Ground floor']['private house']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['1st/Ground floor']['storage unit']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')

       arr4['1st/Ground floor']['elevator building']['Studio apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['1st/Ground floor']['1st/Ground floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['1st/Ground floor']['2nd floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['1st/Ground floor']['3rd floor']['Studio apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['1st/Ground floor']['4th floor']['Studio apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['1st/Ground floor']['private house']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['1st/Ground floor']['storage unit']['Studio apartment'] = returnFunction('2', 80, '2 - 4')

       arr4['1st/Ground floor']['elevator building']['1 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['1st/Ground floor']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction('2', 80, '4 - 6')
       arr4['1st/Ground floor']['2nd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['1st/Ground floor']['3rd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['1st/Ground floor']['4th floor']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['1st/Ground floor']['private house']['1 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['1st/Ground floor']['storage unit']['1 Bedroom apartment'] = returnFunction('2', 80, '3 - 5')

       arr4['1st/Ground floor']['elevator building']['2 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['1st/Ground floor']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['1st/Ground floor']['2nd floor']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['1st/Ground floor']['3rd floor']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['1st/Ground floor']['4th floor']['2 Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['1st/Ground floor']['private house']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['1st/Ground floor']['storage unit']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')

       arr4['1st/Ground floor']['elevator building']['3+ Bedroom apartment'] = returnFunction('4', 160, '8 - 10')
       arr4['1st/Ground floor']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['1st/Ground floor']['2nd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['1st/Ground floor']['3rd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '7 - 9')
       arr4['1st/Ground floor']['4th floor']['3+ Bedroom apartment'] = returnFunction('5', 200, '7 - 9')
       arr4['1st/Ground floor']['private house']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['1st/Ground floor']['storage unit']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')

       arr4['1st/Ground floor']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['1st/Ground floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '4 - 6')
       arr4['1st/Ground floor']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['1st/Ground floor']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['1st/Ground floor']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['1st/Ground floor']['private house']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['1st/Ground floor']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction('3', 120, '5 - 7')

       arr4['1st/Ground floor']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '8 - 10')
       arr4['1st/Ground floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['1st/Ground floor']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['1st/Ground floor']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['1st/Ground floor']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['1st/Ground floor']['private house']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['1st/Ground floor']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')

       arr4['1st/Ground floor']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['1st/Ground floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['1st/Ground floor']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['1st/Ground floor']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '9 - 11')
       arr4['1st/Ground floor']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '10 - 12')
       arr4['1st/Ground floor']['private house']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['1st/Ground floor']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')

       arr4['1st/Ground floor']['elevator building']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['1st/Ground floor']['1st/Ground floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['1st/Ground floor']['2nd floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['1st/Ground floor']['3rd floor']['Office / Commercial space'] = returnFunction('4', 160, '4 - 6')
       arr4['1st/Ground floor']['4th floor']['Office / Commercial space'] = returnFunction('4', 160, '5 - 7')
       arr4['1st/Ground floor']['private house']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['1st/Ground floor']['storage unit']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')



       arr4['2nd floor']['elevator building']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['2nd floor']['2nd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['2nd floor']['3rd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['2nd floor']['4th floor']['Room or less (partial move)'] = returnFunction('3', 120, '3 - 5')
       arr4['2nd floor']['private house']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['2nd floor']['storage unit']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')

       arr4['2nd floor']['elevator building']['Studio apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['2nd floor']['2nd floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['2nd floor']['3rd floor']['Studio apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['2nd floor']['4th floor']['Studio apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['2nd floor']['private house']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['2nd floor']['storage unit']['Studio apartment'] = returnFunction('2', 80, '2 - 4')

       arr4['2nd floor']['elevator building']['1 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction('2', 80, '4 - 6')
       arr4['2nd floor']['2nd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['2nd floor']['3rd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['2nd floor']['4th floor']['1 Bedroom apartment'] = returnFunction('3', 120, '6 - 8')
       arr4['2nd floor']['private house']['1 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['2nd floor']['storage unit']['1 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')

       arr4['2nd floor']['elevator building']['2 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['2nd floor']['2nd floor']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['2nd floor']['3rd floor']['2 Bedroom apartment'] = returnFunction('4', 160, '5 - 7')
       arr4['2nd floor']['4th floor']['2 Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['2nd floor']['private house']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['2nd floor']['storage unit']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')

       arr4['2nd floor']['elevator building']['3+ Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['2nd floor']['2nd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['2nd floor']['3rd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '7 - 9')
       arr4['2nd floor']['4th floor']['3+ Bedroom apartment'] = returnFunction('5', 200, '7 - 9')
       arr4['2nd floor']['private house']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['2nd floor']['storage unit']['3+ Bedroom apartment'] = returnFunction('4', 160, '5 - 7')

       arr4['2nd floor']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['2nd floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '4 - 6')
       arr4['2nd floor']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['2nd floor']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['2nd floor']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['2nd floor']['private house']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['2nd floor']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction('3', 120, '5 - 7')

       arr4['2nd floor']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '8 - 10')
       arr4['2nd floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['2nd floor']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['2nd floor']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['2nd floor']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['2nd floor']['private house']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['2nd floor']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')

       arr4['2nd floor']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['2nd floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['2nd floor']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['2nd floor']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '9 - 11')
       arr4['2nd floor']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '10 - 12')
       arr4['2nd floor']['private house']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['2nd floor']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')

       arr4['2nd floor']['elevator building']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['2nd floor']['1st/Ground floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['2nd floor']['2nd floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['2nd floor']['3rd floor']['Office / Commercial space'] = returnFunction('4', 160, '4 - 6')
       arr4['2nd floor']['4th floor']['Office / Commercial space'] = returnFunction('4', 160, '5 - 7')
       arr4['2nd floor']['private house']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['2nd floor']['storage unit']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')



       arr4['3rd floor']['elevator building']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['3rd floor']['2nd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['3rd floor']['3rd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['3rd floor']['4th floor']['Room or less (partial move)'] = returnFunction('3', 120, '3 - 5')
       arr4['3rd floor']['private house']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['3rd floor']['storage unit']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')

       arr4['3rd floor']['elevator building']['Studio apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['3rd floor']['2nd floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['3rd floor']['3rd floor']['Studio apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['3rd floor']['4th floor']['Studio apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['3rd floor']['private house']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['3rd floor']['storage unit']['Studio apartment'] = returnFunction('2', 80, '2 - 4')

       arr4['3rd floor']['elevator building']['1 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction('2', 80, '4 - 6')
       arr4['3rd floor']['2nd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['3rd floor']['3rd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['3rd floor']['4th floor']['1 Bedroom apartment'] = returnFunction('3', 120, '6 - 8')
       arr4['3rd floor']['private house']['1 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['3rd floor']['storage unit']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')

       arr4['3rd floor']['elevator building']['2 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['3rd floor']['2nd floor']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['3rd floor']['3rd floor']['2 Bedroom apartment'] = returnFunction('4', 160, '5 - 7')
       arr4['3rd floor']['4th floor']['2 Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['3rd floor']['private house']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['3rd floor']['storage unit']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')

       arr4['3rd floor']['elevator building']['3+ Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['3rd floor']['2nd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['3rd floor']['3rd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '7 - 9')
       arr4['3rd floor']['4th floor']['3+ Bedroom apartment'] = returnFunction('5', 200, '7 - 9')
       arr4['3rd floor']['private house']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['3rd floor']['storage unit']['3+ Bedroom apartment'] = returnFunction('4', 160, '5 - 7')

       arr4['3rd floor']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['3rd floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '4 - 6')
       arr4['3rd floor']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['3rd floor']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['3rd floor']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['3rd floor']['private house']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['3rd floor']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction('3', 120, '5 - 7')

       arr4['3rd floor']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '8 - 10')
       arr4['3rd floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['3rd floor']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['3rd floor']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['3rd floor']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['3rd floor']['private house']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['3rd floor']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')

       arr4['3rd floor']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['3rd floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['3rd floor']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['3rd floor']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '9 - 11')
       arr4['3rd floor']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '10 - 12')
       arr4['3rd floor']['private house']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['3rd floor']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')

       arr4['3rd floor']['elevator building']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['3rd floor']['1st/Ground floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['3rd floor']['2nd floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['3rd floor']['3rd floor']['Office / Commercial space'] = returnFunction('4', 160, '4 - 6')
       arr4['3rd floor']['4th floor']['Office / Commercial space'] = returnFunction('4', 160, '5 - 7')
       arr4['3rd floor']['private house']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['3rd floor']['storage unit']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')



       arr4['4th floor']['elevator building']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['4th floor']['1st/Ground floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['4th floor']['2nd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['4th floor']['3rd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['4th floor']['4th floor']['Room or less (partial move)'] = returnFunction('3', 120, '3 - 5')
       arr4['4th floor']['private house']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['4th floor']['storage unit']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')

       arr4['4th floor']['elevator building']['Studio apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['4th floor']['1st/Ground floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['4th floor']['2nd floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['4th floor']['3rd floor']['Studio apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['4th floor']['4th floor']['Studio apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['4th floor']['private house']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['4th floor']['storage unit']['Studio apartment'] = returnFunction('2', 80, '2 - 4')

       arr4['4th floor']['elevator building']['1 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['4th floor']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction('2', 80, '4 - 6')
       arr4['4th floor']['2nd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['4th floor']['3rd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['4th floor']['4th floor']['1 Bedroom apartment'] = returnFunction('3', 120, '6 - 8')
       arr4['4th floor']['private house']['1 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['4th floor']['storage unit']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')

       arr4['4th floor']['elevator building']['2 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['4th floor']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['4th floor']['2nd floor']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['4th floor']['3rd floor']['2 Bedroom apartment'] = returnFunction('4', 160, '5 - 7')
       arr4['4th floor']['4th floor']['2 Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['4th floor']['private house']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['4th floor']['storage unit']['2 Bedroom apartment'] = returnFunction('4', 160, '4 - 6')

       arr4['4th floor']['elevator building']['3+ Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['4th floor']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['4th floor']['2nd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['4th floor']['3rd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '7 - 9')
       arr4['4th floor']['4th floor']['3+ Bedroom apartment'] = returnFunction('5', 200, '7 - 9')
       arr4['4th floor']['private house']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['4th floor']['storage unit']['3+ Bedroom apartment'] = returnFunction('5', 200, '7 - 9')

       arr4['4th floor']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['4th floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '4 - 6')
       arr4['4th floor']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['4th floor']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['4th floor']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['4th floor']['private house']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['4th floor']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction('3', 120, '5 - 7')

       arr4['4th floor']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '8 - 10')
       arr4['4th floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['4th floor']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['4th floor']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['4th floor']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['4th floor']['private house']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['4th floor']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')

       arr4['4th floor']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['4th floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['4th floor']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['4th floor']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '9 - 11')
       arr4['4th floor']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '10 - 12')
       arr4['4th floor']['private house']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['4th floor']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')

       arr4['4th floor']['elevator building']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['4th floor']['1st/Ground floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['4th floor']['2nd floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['4th floor']['3rd floor']['Office / Commercial space'] = returnFunction('4', 160, '4 - 6')
       arr4['4th floor']['4th floor']['Office / Commercial space'] = returnFunction('4', 160, '5 - 7')
       arr4['4th floor']['private house']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['4th floor']['storage unit']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')



       arr4['private house']['elevator building']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['private house']['2nd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['private house']['3rd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['private house']['4th floor']['Room or less (partial move)'] = returnFunction('3', 120, '3 - 5')
       arr4['private house']['private house']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['private house']['storage unit']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')

       arr4['private house']['elevator building']['Studio apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['private house']['2nd floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['private house']['3rd floor']['Studio apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['private house']['4th floor']['Studio apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['private house']['private house']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['private house']['storage unit']['Studio apartment'] = returnFunction('2', 80, '2 - 4')

       arr4['private house']['elevator building']['1 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction('2', 80, '4 - 6')
       arr4['private house']['2nd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['private house']['3rd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['private house']['4th floor']['1 Bedroom apartment'] = returnFunction('3', 120, '6 - 8')
       arr4['private house']['private house']['1 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['private house']['storage unit']['1 Bedroom apartment'] = returnFunction('2', 80, '3 - 5')

       arr4['private house']['elevator building']['2 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['private house']['2nd floor']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['private house']['3rd floor']['2 Bedroom apartment'] = returnFunction('4', 160, '5 - 7')
       arr4['private house']['4th floor']['2 Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['private house']['private house']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['private house']['storage unit']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')

       arr4['private house']['elevator building']['3+ Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['private house']['2nd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['private house']['3rd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '7 - 9')
       arr4['private house']['4th floor']['3+ Bedroom apartment'] = returnFunction('5', 200, '7 - 9')
       arr4['private house']['private house']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['private house']['storage unit']['3+ Bedroom apartment'] = returnFunction('4', 160, '5 - 7')

       arr4['private house']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['private house']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '4 - 6')
       arr4['private house']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['private house']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['private house']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['private house']['private house']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['private house']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction('3', 120, '5 - 7')

       arr4['private house']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '8 - 10')
       arr4['private house']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['private house']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['private house']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['private house']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['private house']['private house']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['private house']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')

       arr4['private house']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['private house']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['private house']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['private house']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '9 - 11')
       arr4['private house']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '10 - 12')
       arr4['private house']['private house']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['private house']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')

       arr4['private house']['elevator building']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['private house']['1st/Ground floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['private house']['2nd floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['private house']['3rd floor']['Office / Commercial space'] = returnFunction('4', 160, '4 - 6')
       arr4['private house']['4th floor']['Office / Commercial space'] = returnFunction('4', 160, '5 - 7')
       arr4['private house']['private house']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['private house']['storage unit']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')



       arr4['storage unit']['elevator building']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['storage unit']['2nd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['storage unit']['3rd floor']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['storage unit']['4th floor']['Room or less (partial move)'] = returnFunction('3', 120, '3 - 5')
       arr4['storage unit']['private house']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')
       arr4['storage unit']['storage unit']['Room or less (partial move)'] = returnFunction('2', 80, '2 - 4')

       arr4['storage unit']['elevator building']['Studio apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['storage unit']['2nd floor']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['storage unit']['3rd floor']['Studio apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['storage unit']['4th floor']['Studio apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['storage unit']['private house']['Studio apartment'] = returnFunction('2', 80, '3 - 5')
       arr4['storage unit']['storage unit']['Studio apartment'] = returnFunction('2', 80, '2 - 4')

       arr4['storage unit']['elevator building']['1 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction('2', 80, '4 - 6')
       arr4['storage unit']['2nd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['storage unit']['3rd floor']['1 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['storage unit']['4th floor']['1 Bedroom apartment'] = returnFunction('3', 120, '6 - 8')
       arr4['storage unit']['private house']['1 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')
       arr4['storage unit']['storage unit']['1 Bedroom apartment'] = returnFunction('2', 80, '3 - 5')

       arr4['storage unit']['elevator building']['2 Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['storage unit']['2nd floor']['2 Bedroom apartment'] = returnFunction('3', 120, '4 - 6')
       arr4['storage unit']['3rd floor']['2 Bedroom apartment'] = returnFunction('4', 160, '5 - 7')
       arr4['storage unit']['4th floor']['2 Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['storage unit']['private house']['2 Bedroom apartment'] = returnFunction('3', 120, '5 - 7')
       arr4['storage unit']['storage unit']['2 Bedroom apartment'] = returnFunction('3', 120, '3 - 5')

       arr4['storage unit']['elevator building']['3+ Bedroom apartment'] = returnFunction('2', 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['storage unit']['2nd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['storage unit']['3rd floor']['3+ Bedroom apartment'] = returnFunction('4', 160, '7 - 9')
       arr4['storage unit']['4th floor']['3+ Bedroom apartment'] = returnFunction('5', 200, '7 - 9')
       arr4['storage unit']['private house']['3+ Bedroom apartment'] = returnFunction('4', 160, '6 - 8')
       arr4['storage unit']['storage unit']['3+ Bedroom apartment'] = returnFunction('4', 160, '5 - 7')

       arr4['storage unit']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['storage unit']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '4 - 6')
       arr4['storage unit']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['storage unit']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['storage unit']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['storage unit']['private house']['2 Bedroom House/Townhouse'] = returnFunction('4', 160, '5 - 7')
       arr4['storage unit']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction('3', 120, '5 - 7')

       arr4['storage unit']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '8 - 10')
       arr4['storage unit']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['storage unit']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '7 - 9')
       arr4['storage unit']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['storage unit']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['storage unit']['private house']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')
       arr4['storage unit']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction('4', 160, '6 - 8')

       arr4['storage unit']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['storage unit']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['storage unit']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '7 - 9')
       arr4['storage unit']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '9 - 11')
       arr4['storage unit']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '10 - 12')
       arr4['storage unit']['private house']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')
       arr4['storage unit']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction('5', 200, '8 - 10')

       arr4['storage unit']['elevator building']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['storage unit']['1st/Ground floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['storage unit']['2nd floor']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['storage unit']['3rd floor']['Office / Commercial space'] = returnFunction('4', 160, '4 - 6')
       arr4['storage unit']['4th floor']['Office / Commercial space'] = returnFunction('4', 160, '5 - 7')
       arr4['storage unit']['private house']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')
       arr4['storage unit']['storage unit']['Office / Commercial space'] = returnFunction('3', 120, '3 - 5')

    return(
      <div className='job-info'>
        {arr4[moveFrom][moveTo][sizeMove]}
      </div>
    )
}

  const returnFunction = (movers, rate, time) => {
    return(

      <div className="rate-result">
        <Grid alignItems="center" container spacing={3} >
          <Grid item xs={6}>
            <Paper className={classes.paper}><label className={classes.info}>{movers}</label> Movers Crew</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}><label className={classes.info}>$ {rate}</label> / hour </Paper>
          </Grid>
        </Grid>
          <Divider />

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <Paper className={classes.paper}>Estimated Time</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}><label className={classes.info}>{time}</label> hours</Paper>
          </Grid>
        </Grid>
        <Divider />

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <Paper className={classes.paper}>Travel Time</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={clsx(classes.paper, classes.infoTime)}>{travelTime}{" "}(from/to HQ)</Paper>
          </Grid>
        </Grid>
        <Divider />

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <Paper className={classes.paper}>Estimated Quote</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}><label className={classes.infoMoney}>${time[0]*rate}</label> - <label className={classes.infoMoney}>${time.slice(4)*rate}</label></Paper>
          </Grid>
        </Grid>

      </div>
    )
  }

  const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: rest.origin,
      destination: rest.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDistance(result.routes[0].legs[0].distance.text)
      }
  });

  const getAddress = (zipcode, id) => {
    let geocoder = new google.maps.Geocoder()
    geocoder.geocode( { 'address': zipcode}, function(results, status) {
      let outputCytiOrigin = document.getElementById(id);
      let city_name = results ? results[0] : <div>Loading...</div>

      return !results ? <div>Loading...</div> : outputCytiOrigin.innerHTML = `${city_name.formatted_address}`
    });

  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >

      <Container maxWidth="md">
        <Typography
          variant="h5"
          align="center"
          color='textSecondary'
          gutterBottom
          className={classes.header}
        >
          Moving a
          <label
            className={classes.subHeader}
          >{rest.movingsize}</label>
          from
          <label
            className={classes.subHeader}
          >{rest.typefrom}</label>
           to
           <label
             className={classes.subHeader}
           >{rest.typeto}</label>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>From{" "}<div id='origin' className={classes.cityName}> {getAddress(rest.origin, 'origin')}</div></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>{distance}</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>To{" "}<div id='destination' className={classes.cityName}> {getAddress(rest.destination, 'destination')}</div></Paper>
          </Grid>
        </Grid>

          {handleResult(rest.typefrom, rest.typeto, rest.movingsize)}

          <Grid container spacing={3} >
            <Grid item xs={6}>
              <Button
                onClick={onClose}
                className={clsx(classes.browseButton, classes.backButton)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Link
                className={clsx(classes.browseButton, classes.nextButton)}
                color="textSecondary"
                component={RouterLink}
                to="/book"
                underline="none"
                variant="body2"
              >
                Let&apos;s Get Started
              </Link>
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}

Result.propTypes = {
  className: PropTypes.string
};

export default Result;
