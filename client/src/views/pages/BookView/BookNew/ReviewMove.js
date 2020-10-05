import React, { useState, useEffect } from 'react';
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
  Button,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableFooter
} from '@material-ui/core';
import { deepPurple, amber, deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {},
  cell: {
    borderBottom: 'none'
  },
  boxItem: {
    padding: '3px 15px'
  },
  name: {
    fontWeight: 600,
  }
}));

function ReviewMove({ className, onBack, onSubmit, formState, setFormState, ...rest }) {
  const classes = useStyles();
  const google = window.google = window.google ? window.google : {}
  const [distance, setDistance] = useState()
  const [travelTime, setTravelTime] = useState()
  const [crew, setCrew] = useState()
  const [rate, setRate] = useState()

  const formatPhoneNumber = (phoneNumberString) => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  }

  const officeHome = "2 Saint Paul St, Brookline, MA";

//find travel time
  useEffect(() => {
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
          setFormState(formState => ({
            ...formState,
            values: {
              ...formState.values,
              job: {
                  ...formState.values.job,
                travel_time: `${timeTo} / ${timeFrom}`
              }
            }
          }))
        }
      }
    });

  }, []);


  const handleResult = (moveFrom, moveTo, sizeMove) => {


    // let floorArray = ['elevator building', '1st/Ground floor', '2nd floor', '3rd floor', '4th floor', 'private house', 'storage unit'];
    // let aptSizeArray = ['Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '3+ Bedroom apartment', '2 Bedroom House/Townhouse', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space']
    //
    // let newArray = floorArray
    //
    // for(var i = 0; i < floorArray.length; i++) {
    //     newArray[i] = floorArray
    // }
    // console.log(newArray);

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

       arr4['elevator building']['elevator building']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['elevator building']['1st/Ground floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['elevator building']['2nd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['elevator building']['3rd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['elevator building']['4th floor']['Room or less (partial move)'] = returnFunction(3, 120, '3 - 5')
       arr4['elevator building']['private house']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['elevator building']['storage unit']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')

       arr4['elevator building']['elevator building']['Studio apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['elevator building']['1st/Ground floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['elevator building']['2nd floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['elevator building']['3rd floor']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['elevator building']['4th floor']['Studio apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['elevator building']['private house']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['elevator building']['storage unit']['Studio apartment'] = returnFunction(2, 80, '2 - 4')

       arr4['elevator building']['elevator building']['1 Bedroom apartment'] = returnFunction(2, 80, '4 - 6')
       arr4['elevator building']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction(2, 80, '4 - 6')
       arr4['elevator building']['2nd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['elevator building']['3rd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['elevator building']['4th floor']['1 Bedroom apartment'] = returnFunction(3, 120, '6 - 8')
       arr4['elevator building']['private house']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['elevator building']['storage unit']['1 Bedroom apartment'] = returnFunction(3, 80, '3 - 5')

       arr4['elevator building']['elevator building']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['elevator building']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['elevator building']['2nd floor']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['elevator building']['3rd floor']['2 Bedroom apartment'] = returnFunction(4, 160, '5 - 7')
       arr4['elevator building']['4th floor']['2 Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['elevator building']['private house']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['elevator building']['storage unit']['2 Bedroom apartment'] = returnFunction(3, 80, '4 - 6')

       arr4['elevator building']['elevator building']['3+ Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['elevator building']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['elevator building']['2nd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['elevator building']['3rd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '7 - 9')
       arr4['elevator building']['4th floor']['3+ Bedroom apartment'] = returnFunction(5, 200, '7 - 9')
       arr4['elevator building']['private house']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['elevator building']['storage unit']['3+ Bedroom apartment'] = returnFunction(4, 80, '5 - 7')

       arr4['elevator building']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['elevator building']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '4 - 6')
       arr4['elevator building']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['elevator building']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['elevator building']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['elevator building']['private house']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['elevator building']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction(3, 120, '5 - 7')

       arr4['elevator building']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '8 - 10')
       arr4['elevator building']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['elevator building']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['elevator building']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['elevator building']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['elevator building']['private house']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['elevator building']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')

       arr4['elevator building']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['elevator building']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['elevator building']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['elevator building']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '9 - 11')
       arr4['elevator building']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '10 - 12')
       arr4['elevator building']['private house']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['elevator building']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')

       arr4['elevator building']['elevator building']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['elevator building']['1st/Ground floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['elevator building']['2nd floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['elevator building']['3rd floor']['Office / Commercial space'] = returnFunction(4, 160, '4 - 6')
       arr4['elevator building']['4th floor']['Office / Commercial space'] = returnFunction(4, 160, '5 - 7')
       arr4['elevator building']['private house']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['elevator building']['storage unit']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')



       arr4['1st/Ground floor']['elevator building']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['1st/Ground floor']['1st/Ground floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['1st/Ground floor']['2nd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['1st/Ground floor']['3rd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['1st/Ground floor']['4th floor']['Room or less (partial move)'] = returnFunction(3, 120, '3 - 5')
       arr4['1st/Ground floor']['private house']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['1st/Ground floor']['storage unit']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')

       arr4['1st/Ground floor']['elevator building']['Studio apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['1st/Ground floor']['1st/Ground floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['1st/Ground floor']['2nd floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['1st/Ground floor']['3rd floor']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['1st/Ground floor']['4th floor']['Studio apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['1st/Ground floor']['private house']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['1st/Ground floor']['storage unit']['Studio apartment'] = returnFunction(2, 80, '2 - 4')

       arr4['1st/Ground floor']['elevator building']['1 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['1st/Ground floor']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction(2, 80, '4 - 6')
       arr4['1st/Ground floor']['2nd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['1st/Ground floor']['3rd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['1st/Ground floor']['4th floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['1st/Ground floor']['private house']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['1st/Ground floor']['storage unit']['1 Bedroom apartment'] = returnFunction(2, 80, '3 - 5')

       arr4['1st/Ground floor']['elevator building']['2 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['1st/Ground floor']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['1st/Ground floor']['2nd floor']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['1st/Ground floor']['3rd floor']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['1st/Ground floor']['4th floor']['2 Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['1st/Ground floor']['private house']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['1st/Ground floor']['storage unit']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')

       arr4['1st/Ground floor']['elevator building']['3+ Bedroom apartment'] = returnFunction(4, 160, '8 - 10')
       arr4['1st/Ground floor']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['1st/Ground floor']['2nd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['1st/Ground floor']['3rd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '7 - 9')
       arr4['1st/Ground floor']['4th floor']['3+ Bedroom apartment'] = returnFunction(5, 200, '7 - 9')
       arr4['1st/Ground floor']['private house']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['1st/Ground floor']['storage unit']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')

       arr4['1st/Ground floor']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['1st/Ground floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '4 - 6')
       arr4['1st/Ground floor']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['1st/Ground floor']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['1st/Ground floor']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['1st/Ground floor']['private house']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['1st/Ground floor']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction(3, 120, '5 - 7')

       arr4['1st/Ground floor']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '8 - 10')
       arr4['1st/Ground floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['1st/Ground floor']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['1st/Ground floor']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['1st/Ground floor']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['1st/Ground floor']['private house']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['1st/Ground floor']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')

       arr4['1st/Ground floor']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['1st/Ground floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['1st/Ground floor']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['1st/Ground floor']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '9 - 11')
       arr4['1st/Ground floor']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '10 - 12')
       arr4['1st/Ground floor']['private house']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['1st/Ground floor']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')

       arr4['1st/Ground floor']['elevator building']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['1st/Ground floor']['1st/Ground floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['1st/Ground floor']['2nd floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['1st/Ground floor']['3rd floor']['Office / Commercial space'] = returnFunction(4, 160, '4 - 6')
       arr4['1st/Ground floor']['4th floor']['Office / Commercial space'] = returnFunction(4, 160, '5 - 7')
       arr4['1st/Ground floor']['private house']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['1st/Ground floor']['storage unit']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')



       arr4['2nd floor']['elevator building']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['2nd floor']['2nd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['2nd floor']['3rd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['2nd floor']['4th floor']['Room or less (partial move)'] = returnFunction(3, 120, '3 - 5')
       arr4['2nd floor']['private house']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['2nd floor']['storage unit']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')

       arr4['2nd floor']['elevator building']['Studio apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['2nd floor']['2nd floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['2nd floor']['3rd floor']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['2nd floor']['4th floor']['Studio apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['2nd floor']['private house']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['2nd floor']['storage unit']['Studio apartment'] = returnFunction(2, 80, '2 - 4')

       arr4['2nd floor']['elevator building']['1 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction(2, 80, '4 - 6')
       arr4['2nd floor']['2nd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['2nd floor']['3rd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['2nd floor']['4th floor']['1 Bedroom apartment'] = returnFunction(3, 120, '6 - 8')
       arr4['2nd floor']['private house']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['2nd floor']['storage unit']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')

       arr4['2nd floor']['elevator building']['2 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['2nd floor']['2nd floor']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['2nd floor']['3rd floor']['2 Bedroom apartment'] = returnFunction(4, 160, '5 - 7')
       arr4['2nd floor']['4th floor']['2 Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['2nd floor']['private house']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['2nd floor']['storage unit']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')

       arr4['2nd floor']['elevator building']['3+ Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['2nd floor']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['2nd floor']['2nd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['2nd floor']['3rd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '7 - 9')
       arr4['2nd floor']['4th floor']['3+ Bedroom apartment'] = returnFunction(5, 200, '7 - 9')
       arr4['2nd floor']['private house']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['2nd floor']['storage unit']['3+ Bedroom apartment'] = returnFunction(4, 160, '5 - 7')

       arr4['2nd floor']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['2nd floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '4 - 6')
       arr4['2nd floor']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['2nd floor']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['2nd floor']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['2nd floor']['private house']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['2nd floor']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction(3, 120, '5 - 7')

       arr4['2nd floor']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '8 - 10')
       arr4['2nd floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['2nd floor']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['2nd floor']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['2nd floor']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['2nd floor']['private house']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['2nd floor']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')

       arr4['2nd floor']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['2nd floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['2nd floor']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['2nd floor']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '9 - 11')
       arr4['2nd floor']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '10 - 12')
       arr4['2nd floor']['private house']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['2nd floor']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')

       arr4['2nd floor']['elevator building']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['2nd floor']['1st/Ground floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['2nd floor']['2nd floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['2nd floor']['3rd floor']['Office / Commercial space'] = returnFunction(4, 160, '4 - 6')
       arr4['2nd floor']['4th floor']['Office / Commercial space'] = returnFunction(4, 160, '5 - 7')
       arr4['2nd floor']['private house']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['2nd floor']['storage unit']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')



       arr4['3rd floor']['elevator building']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['3rd floor']['2nd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['3rd floor']['3rd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['3rd floor']['4th floor']['Room or less (partial move)'] = returnFunction(3, 120, '3 - 5')
       arr4['3rd floor']['private house']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['3rd floor']['storage unit']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')

       arr4['3rd floor']['elevator building']['Studio apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['3rd floor']['2nd floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['3rd floor']['3rd floor']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['3rd floor']['4th floor']['Studio apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['3rd floor']['private house']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['3rd floor']['storage unit']['Studio apartment'] = returnFunction(2, 80, '2 - 4')

       arr4['3rd floor']['elevator building']['1 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction(2, 80, '4 - 6')
       arr4['3rd floor']['2nd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['3rd floor']['3rd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['3rd floor']['4th floor']['1 Bedroom apartment'] = returnFunction(3, 120, '6 - 8')
       arr4['3rd floor']['private house']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['3rd floor']['storage unit']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')

       arr4['3rd floor']['elevator building']['2 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['3rd floor']['2nd floor']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['3rd floor']['3rd floor']['2 Bedroom apartment'] = returnFunction(4, 160, '5 - 7')
       arr4['3rd floor']['4th floor']['2 Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['3rd floor']['private house']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['3rd floor']['storage unit']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')

       arr4['3rd floor']['elevator building']['3+ Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['3rd floor']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['3rd floor']['2nd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['3rd floor']['3rd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '7 - 9')
       arr4['3rd floor']['4th floor']['3+ Bedroom apartment'] = returnFunction(5, 200, '7 - 9')
       arr4['3rd floor']['private house']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['3rd floor']['storage unit']['3+ Bedroom apartment'] = returnFunction(4, 160, '5 - 7')

       arr4['3rd floor']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['3rd floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '4 - 6')
       arr4['3rd floor']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['3rd floor']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['3rd floor']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['3rd floor']['private house']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['3rd floor']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction(3, 120, '5 - 7')

       arr4['3rd floor']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '8 - 10')
       arr4['3rd floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['3rd floor']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['3rd floor']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['3rd floor']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['3rd floor']['private house']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['3rd floor']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')

       arr4['3rd floor']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['3rd floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['3rd floor']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['3rd floor']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '9 - 11')
       arr4['3rd floor']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '10 - 12')
       arr4['3rd floor']['private house']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['3rd floor']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')

       arr4['3rd floor']['elevator building']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['3rd floor']['1st/Ground floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['3rd floor']['2nd floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['3rd floor']['3rd floor']['Office / Commercial space'] = returnFunction(4, 160, '4 - 6')
       arr4['3rd floor']['4th floor']['Office / Commercial space'] = returnFunction(4, 160, '5 - 7')
       arr4['3rd floor']['private house']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['3rd floor']['storage unit']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')



       arr4['4th floor']['elevator building']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['4th floor']['1st/Ground floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['4th floor']['2nd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['4th floor']['3rd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['4th floor']['4th floor']['Room or less (partial move)'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['private house']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['4th floor']['storage unit']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')

       arr4['4th floor']['elevator building']['Studio apartment'] = returnFunction(3, 120, '2 - 4')
       arr4['4th floor']['1st/Ground floor']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['2nd floor']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['3rd floor']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['4th floor']['Studio apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['4th floor']['private house']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['storage unit']['Studio apartment'] = returnFunction(3, 120, '2 - 4')

       arr4['4th floor']['elevator building']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['4th floor']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['2nd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['4th floor']['3rd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['4th floor']['4th floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['4th floor']['private house']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['storage unit']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')

       arr4['4th floor']['elevator building']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['4th floor']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['4th floor']['2nd floor']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['4th floor']['3rd floor']['2 Bedroom apartment'] = returnFunction(4, 160, '5 - 7')
       arr4['4th floor']['4th floor']['2 Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['4th floor']['private house']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['4th floor']['storage unit']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')

       arr4['4th floor']['elevator building']['3+ Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['4th floor']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['4th floor']['2nd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['4th floor']['3rd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '7 - 9')
       arr4['4th floor']['4th floor']['3+ Bedroom apartment'] = returnFunction(5, 200, '7 - 9')
       arr4['4th floor']['private house']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['4th floor']['storage unit']['3+ Bedroom apartment'] = returnFunction(5, 200, '7 - 9')

       arr4['4th floor']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['4th floor']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '4 - 6')
       arr4['4th floor']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['4th floor']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['4th floor']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['4th floor']['private house']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['4th floor']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction(3, 120, '5 - 7')

       arr4['4th floor']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '8 - 10')
       arr4['4th floor']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['4th floor']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['4th floor']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['4th floor']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['4th floor']['private house']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['4th floor']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')

       arr4['4th floor']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['4th floor']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['4th floor']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['4th floor']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '9 - 11')
       arr4['4th floor']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '10 - 12')
       arr4['4th floor']['private house']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['4th floor']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')

       arr4['4th floor']['elevator building']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['1st/Ground floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['2nd floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['3rd floor']['Office / Commercial space'] = returnFunction(4, 160, '4 - 6')
       arr4['4th floor']['4th floor']['Office / Commercial space'] = returnFunction(4, 160, '5 - 7')
       arr4['4th floor']['private house']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['4th floor']['storage unit']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')



       arr4['private house']['elevator building']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['private house']['2nd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['private house']['3rd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['private house']['4th floor']['Room or less (partial move)'] = returnFunction(3, 120, '3 - 5')
       arr4['private house']['private house']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['private house']['storage unit']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')

       arr4['private house']['elevator building']['Studio apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['private house']['2nd floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['private house']['3rd floor']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['private house']['4th floor']['Studio apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['private house']['private house']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['private house']['storage unit']['Studio apartment'] = returnFunction(2, 80, '2 - 4')

       arr4['private house']['elevator building']['1 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction(2, 80, '4 - 6')
       arr4['private house']['2nd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['private house']['3rd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['private house']['4th floor']['1 Bedroom apartment'] = returnFunction(3, 120, '6 - 8')
       arr4['private house']['private house']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['private house']['storage unit']['1 Bedroom apartment'] = returnFunction(2, 80, '3 - 5')

       arr4['private house']['elevator building']['2 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['private house']['2nd floor']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['private house']['3rd floor']['2 Bedroom apartment'] = returnFunction(4, 160, '5 - 7')
       arr4['private house']['4th floor']['2 Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['private house']['private house']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['private house']['storage unit']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')

       arr4['private house']['elevator building']['3+ Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['private house']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['private house']['2nd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['private house']['3rd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '7 - 9')
       arr4['private house']['4th floor']['3+ Bedroom apartment'] = returnFunction(5, 200, '7 - 9')
       arr4['private house']['private house']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['private house']['storage unit']['3+ Bedroom apartment'] = returnFunction(4, 160, '5 - 7')

       arr4['private house']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['private house']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '4 - 6')
       arr4['private house']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['private house']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['private house']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['private house']['private house']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['private house']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction(3, 120, '5 - 7')

       arr4['private house']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '8 - 10')
       arr4['private house']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['private house']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['private house']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['private house']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['private house']['private house']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['private house']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')

       arr4['private house']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['private house']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['private house']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['private house']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '9 - 11')
       arr4['private house']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '10 - 12')
       arr4['private house']['private house']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['private house']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')

       arr4['private house']['elevator building']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['private house']['1st/Ground floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['private house']['2nd floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['private house']['3rd floor']['Office / Commercial space'] = returnFunction(4, 160, '4 - 6')
       arr4['private house']['4th floor']['Office / Commercial space'] = returnFunction(4, 160, '5 - 7')
       arr4['private house']['private house']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['private house']['storage unit']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')



       arr4['storage unit']['elevator building']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['storage unit']['2nd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['storage unit']['3rd floor']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['storage unit']['4th floor']['Room or less (partial move)'] = returnFunction(3, 120, '3 - 5')
       arr4['storage unit']['private house']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')
       arr4['storage unit']['storage unit']['Room or less (partial move)'] = returnFunction(2, 80, '2 - 4')

       arr4['storage unit']['elevator building']['Studio apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['storage unit']['2nd floor']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['storage unit']['3rd floor']['Studio apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['storage unit']['4th floor']['Studio apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['storage unit']['private house']['Studio apartment'] = returnFunction(2, 80, '3 - 5')
       arr4['storage unit']['storage unit']['Studio apartment'] = returnFunction(2, 80, '2 - 4')

       arr4['storage unit']['elevator building']['1 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['1 Bedroom apartment'] = returnFunction(2, 80, '4 - 6')
       arr4['storage unit']['2nd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['storage unit']['3rd floor']['1 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['storage unit']['4th floor']['1 Bedroom apartment'] = returnFunction(3, 120, '6 - 8')
       arr4['storage unit']['private house']['1 Bedroom apartment'] = returnFunction(3, 120, '3 - 5')
       arr4['storage unit']['storage unit']['1 Bedroom apartment'] = returnFunction(2, 80, '3 - 5')

       arr4['storage unit']['elevator building']['2 Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['storage unit']['2nd floor']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')
       arr4['storage unit']['3rd floor']['2 Bedroom apartment'] = returnFunction(4, 160, '5 - 7')
       arr4['storage unit']['4th floor']['2 Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['storage unit']['private house']['2 Bedroom apartment'] = returnFunction(3, 120, '5 - 7')
       arr4['storage unit']['storage unit']['2 Bedroom apartment'] = returnFunction(3, 120, '4 - 6')

       arr4['storage unit']['elevator building']['3+ Bedroom apartment'] = returnFunction(2, 80, '2 - 4')
       arr4['storage unit']['1st/Ground floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['storage unit']['2nd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['storage unit']['3rd floor']['3+ Bedroom apartment'] = returnFunction(4, 160, '7 - 9')
       arr4['storage unit']['4th floor']['3+ Bedroom apartment'] = returnFunction(5, 200, '7 - 9')
       arr4['storage unit']['private house']['3+ Bedroom apartment'] = returnFunction(4, 160, '6 - 8')
       arr4['storage unit']['storage unit']['3+ Bedroom apartment'] = returnFunction(4, 160, '5 - 7')

       arr4['storage unit']['elevator building']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['storage unit']['1st/Ground floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '4 - 6')
       arr4['storage unit']['2nd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['storage unit']['3rd floor']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['storage unit']['4th floor']['2 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['storage unit']['private house']['2 Bedroom House/Townhouse'] = returnFunction(4, 160, '5 - 7')
       arr4['storage unit']['storage unit']['2 Bedroom House/Townhouse'] = returnFunction(3, 120, '5 - 7')

       arr4['storage unit']['elevator building']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '8 - 10')
       arr4['storage unit']['1st/Ground floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['storage unit']['2nd floor']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '7 - 9')
       arr4['storage unit']['3rd floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['storage unit']['4th floor']['3 Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['storage unit']['private house']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')
       arr4['storage unit']['storage unit']['3 Bedroom House/Townhouse'] = returnFunction(4, 160, '6 - 8')

       arr4['storage unit']['elevator building']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['storage unit']['1st/Ground floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['storage unit']['2nd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '7 - 9')
       arr4['storage unit']['3rd floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '9 - 11')
       arr4['storage unit']['4th floor']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '10 - 12')
       arr4['storage unit']['private house']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')
       arr4['storage unit']['storage unit']['4+ Bedroom House/Townhouse'] = returnFunction(5, 200, '8 - 10')

       arr4['storage unit']['elevator building']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['storage unit']['1st/Ground floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['storage unit']['2nd floor']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['storage unit']['3rd floor']['Office / Commercial space'] = returnFunction(4, 160, '4 - 6')
       arr4['storage unit']['4th floor']['Office / Commercial space'] = returnFunction(4, 160, '5 - 7')
       arr4['storage unit']['private house']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')
       arr4['storage unit']['storage unit']['Office / Commercial space'] = returnFunction(3, 120, '3 - 5')

    return(
      <Table className='job-info'>
        {arr4[moveFrom][moveTo][sizeMove]}
      </Table>
    )
}

  const returnFunction = (movers, rate, time) => {
    // setFormState(formState => ({
    //   ...formState,
    //   values: {
    //     ...formState.values,
    //     job: {
    //         ...formState.values.job,
    //       crew_size: movers,
    //       job_rate: rate,
    //       estimated_time: time,
    //     }
    //   }
    // }))
    return(



      <TableBody>
        <TableRow>
          <TableCell>Moving Date: </TableCell>
          <TableCell style={{fontWeight: 'bold'}} >
            {formState.values.job.pick_up_date}
          </TableCell>
        </TableRow>
        {
          (formState.values.job.delivery_date === null )
          ?
          null
          :
            <TableRow>
              <TableCell>Delivery Date: </TableCell>
              <TableCell style={{fontWeight: 'bold'}}>
                {formState.values.job.delivery_date}
              </TableCell>
            </TableRow>
        }
        <TableRow>
          <TableCell className={classes.cell}>Moving From: </TableCell>
          <TableCell className={classes.cell}>
            <Box>
              <Button
                style={{padding: '3px'}}
              >
                {formState.values.origin.address}
              </Button>
            </Box>
            <Box component="div" display="inline" style={{fontWeight: 'bold'}}>*{formState.values.origin.floor}</Box>
            <Box component="div" display="inline" ml={2}>Apt#{(formState.values.origin.apt_number === "") ? ' unknown' : " "+formState.values.origin.apt_number}</Box>
          </TableCell>
        </TableRow>
        <TableRow >
          <TableCell>Moving To:</TableCell>
          <TableCell>
            <Box>
              <Button
                style={{padding: '3px'}}
              >
                {formState.values.destination.address}
              </Button>
            </Box>
            <Box component="div" display="inline" style={{fontWeight: 'bold'}}>*{formState.values.destination.floor}</Box>
            <Box component="div" display="inline" ml={2}>Apt#{(formState.values.destination.apt_number === "") ? ' unknown' : " "+formState.values.destination.apt_number}</Box>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell className={classes.cell}>Moving Type:</TableCell>
          <TableCell className={classes.cell}>
            {formState.values.job.job_type}
          </TableCell>
        </TableRow>
        <TableRow >
          <TableCell>Moving Size:</TableCell>
          <TableCell style={{fontWeight: 600}}>
            {formState.values.job.job_size}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className={classes.cell} >Crew:</TableCell>
          <TableCell className={classes.cell} style={{fontWeight: 600}}>
            {movers} Movers
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell className={classes.cell}>Rate:</TableCell>
          <TableCell className={classes.cell} style={{color: deepPurple['A200'], fontSize: '18px', fontWeight: 'bold'}}>
            <label >$ {rate}</label> / hr <label style={{color: 'grey', fontSize: '12px', fontStyle: 'italic', fontWeight: 'normal'}}> - billed in 15 minutes increment</label>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className={classes.cell} >Estimated Time:</TableCell>
          <TableCell className={classes.cell} style={{color: '#FD7013', fontSize: '18px', fontWeight: 'bold'}}>
            <label>{time}</label> hours*
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className={classes.cell} >Travel Time:</TableCell>
          <TableCell className={classes.cell}className={classes.cell}>
            <label>{travelTime} (from/to HQ)</label>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell className={classes.cell} >Estimated Quote:</TableCell>
          <TableCell className={classes.cell} style={{fontWeight: 600, fontSize: '18px', color: '#FD7013'}}>
            <label>${time[0]*rate}</label> - <label>${time.slice(4)*rate}</label>
          </TableCell>
        </TableRow>
      </TableBody>
    )
  }
  return (
      <div>
        <Box
          mt={3}
          mb={3}
          display="flex"
          flexDirection='column'
        >
          <Box className={clsx(classes.boxItem, classes.name)}>
            {formState.values.user.first_name + " " + formState.values.user.last_name}
          </Box>
          <Box className={classes.boxItem}>
            {formState.values.user.email}
          </Box>
          <Box className={classes.boxItem}>
            {formatPhoneNumber(formState.values.user.phone)}
          </Box>
        </Box>
        {handleResult(rest.typefrom, rest.typeto, rest.movingsize)}
        <Box
          mt={3}
          display="flex"
        >
          {onBack && (
            <Button
              size="large"
              variant="outlined"
              size="large"
              onClick={() => {
                window.scrollTo(0, 0);
                onBack()
              }}
            >
              Previous
            </Button>
          )}
          <Box flexGrow={1} />
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={() => {
              window.scrollTo(0, 0);
              onSubmit()
            }}
          >
            Sumbit
          </Button>
        </Box>
      </div>
  );
}

ReviewMove.propTypes = {
  className: PropTypes.string
};

export default ReviewMove;
