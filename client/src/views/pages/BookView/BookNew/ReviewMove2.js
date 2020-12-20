import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Container,
  Typography,
  makeStyles,
  Grid,
  Paper,
  Divider,
  Button,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
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

function ResultNew({ className, onBack, onSubmit, formState, setFormState, jobType, typeFrom, typeTo, movingSize, origin, destination, }) {
  const classes = useStyles();
  const [crewSize, setCrewSize] = useState(0)
  const [travelTime, setTravelTime] = useState([])
  const officeHome = "02446";
  const google = window.google = window.google ? window.google : {}
  const [distance, setDistance] = useState()
  const [addresses, setAddresses] = useState([])
  const [timeBetweenPionts, setTimeBetweenPionts] = useState(0)
  const [minutes, setMinutes] = useState('')
  const [quote, setQuote] = useState('')
  const rate = {
    '2': 90,
    '3': 120,
    '4': 160,
  }
  let estimate = 60
  let times = {}


  if(jobType === "Moving" || jobType === "Moving with Storage") {
    times = {
      'Room or less (partial move)': estimate,
      'Studio apartment': estimate * 2,
      '1 Bedroom apartment': estimate * 3,
      '2 Bedroom apartment': estimate * 4,
      '2 Bedroom House/Townhouse': estimate * 5,
      '3+ Bedroom apartment': estimate * 6,
      '3 Bedroom House/Townhouse': estimate * 7,
      '4+ Bedroom House/Townhouse': estimate * 10,
      'Office / Commercial space': estimate * 5,
    }
  } else {
    times = {
      'Room or less (partial move)': estimate / 2,
      'Studio apartment': (estimate * 2) / 2,
      '1 Bedroom apartment': (estimate * 3) / 2,
      '2 Bedroom apartment': (estimate * 4) / 2,
      '2 Bedroom House/Townhouse': (estimate * 5) / 2,
      '3+ Bedroom apartment': (estimate *6) / 2,
      '3 Bedroom House/Townhouse': (estimate * 7) / 2,
      '4+ Bedroom House/Townhouse': (estimate * 10) / 2,
      'Office / Commercial space': (estimate * 5) / 2,
    }
  }

  const formatPhoneNumber = (phoneNumberString) => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  }

  const handleResult = (apartment, fromFloor, toFloor) => {
    let apt = ['Room or less (partial move)', 'Studio apartment', '1 Bedroom apartment', '2 Bedroom apartment', '2 Bedroom House/Townhouse', '3+ Bedroom apartment', '3 Bedroom House/Townhouse', '4+ Bedroom House/Townhouse', 'Office / Commercial space']
    let etaj = ['elevator building', '1st/Ground floor', '2nd floor', 'private house', 'storage unit', '3rd floor', '4th floor']

    let arr = []
    let nr = 2;
    for (let i=0; i<apt.length; i++) {

      if(apt[i]===apartment) {

        for (let j=0; j<etaj.length; j++) {
          if(etaj[j] === fromFloor) {
            for (let k=0; k<etaj.length; k++) {
                arr.push([apt[i], etaj[j], etaj[k]])
                if (i >= 3 && (k > 4 || j > 4)) nr = 4;
                if ((i >= 1 && i < 4) && (k <= 5 || j <= 5)) nr = 3;
                if (i < 3 && (k < 5 || j < 5)) nr = 2;
                if (i > 4) nr = 4;
                arr[apartment, fromFloor, toFloor] = nr
            }
          }
        }
      }
    }
    return arr[apartment, fromFloor, toFloor]
  }

  useEffect(()=> {
    setCrewSize(handleResult(movingSize, typeFrom, typeTo));
    console.log('crewSize effect');
    return () => {
        setCrewSize(0)
    }
  },[movingSize, typeFrom, typeTo])

  const DirectionsService = () => {
    const DirServ = new google.maps.DirectionsService();
      DirServ.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          let time = Math.round((result.routes[0].legs[0].duration.value / 60) / 10) * 10
          setDistance(result.routes[0].legs[0].distance.text)
          setTimeBetweenPionts(time)
          return null
        }
    });
    return null
  }

  useEffect(()=> {
    DirectionsService();
    console.log('timebetween effect');
    return () => {
        setTimeBetweenPionts(0)
    }
  },[origin, destination])

  const findTravelTime = () => {
    const TravelTime = new google.maps.DistanceMatrixService();
    TravelTime.getDistanceMatrix({
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
        setAddresses(response.destinationAddresses)

        if(response.rows[0].elements[0].status !== "ZERO_RESULTS" && response.rows[0].elements[1].status !== "ZERO_RESULTS"){
          if(results[0].distance.value < 20000 ){
            timeTo = 20
          } else {
            timeTo = Math.round((results[0].duration.value / 60) / 10) * 10 ;
          }
          if(results[1].distance.value < 20000 ){
            timeFrom = 20
          } else {
              timeFrom = Math.round((results[1].duration.value / 60) / 10) * 10;
          }
          setTravelTime([timeTo, timeFrom])
          return null
        }
      }
    });
  }

  useEffect(()=> {
    findTravelTime()
    console.log('traveltime effect');
    return () => {
        setAddresses([])
    }
  },[origin, destination])

  const quoteFunction = () => {
    let totalMinutes = travelTime[0] + travelTime[1] + timeBetweenPionts + times[movingSize]
    let hours = (totalMinutes / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    if(rminutes > 30) {
      rhours +=1
    }
    let lowQuote = rhours * rate[crewSize]
    let highQuote = 0;
    if(jobType === "Moving" || jobType === "Moving with Storage") {
      setMinutes(`${rhours} - ${rhours+2}`);
      highQuote = (rhours + 2) * rate[crewSize]
    }
    else {
      setMinutes(`${rhours} - ${rhours+1}`);
      highQuote = (rhours + 1) * rate[crewSize]
    }
    setQuote(`$${lowQuote} - $${highQuote}`)
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        job: {
            ...formState.values.job,
          travel_time: `${travelTime[0]} / ${travelTime[1]}`,
          crew_size: crewSize,
          job_rate: rate[crewSize],
          estimated_time: `${rhours} - ${rhours+2}`,
          estimated_quote: `$${lowQuote} - $${highQuote}`,

        }
      }
    }))
  }

  useEffect(()=> {
    quoteFunction()
  },[travelTime])

  return (
    <div className={clsx(classes.root, className)}>
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

      <Table>
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
              {crewSize} Movers
            </TableCell>
          </TableRow>

          <TableRow >
            <TableCell className={classes.cell}>Rate:</TableCell>
            <TableCell className={classes.cell} style={{color: deepPurple['A200'], fontSize: '18px', fontWeight: 'bold'}}>
              <label >$ {rate[crewSize]}</label> / hr <label style={{color: 'grey', fontSize: '12px', fontStyle: 'italic', fontWeight: 'normal'}}> - billed in 15 minutes increment</label>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.cell} >Estimated Time:</TableCell>
            <TableCell className={classes.cell} style={{color: '#FD7013', fontSize: '18px', fontWeight: 'bold'}}>
              <label>{minutes}</label> hours*
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.cell} >Travel Time:</TableCell>
            <TableCell className={classes.cell}className={classes.cell}>
              <label>{`${travelTime[0]}min/${travelTime[1]}min`}{" "}(from/to HQ)</label>
            </TableCell>
          </TableRow>

          <TableRow >
            <TableCell className={classes.cell} >Estimated Quote:</TableCell>
            <TableCell className={classes.cell} style={{fontWeight: 600, fontSize: '18px', color: '#FD7013'}}>
              <label>{quote}</label>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box
        mt={3}
        display="flex"
      >
        {onBack && (
          <Button
            size="large"
            variant="outlined"
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

export default ResultNew;
