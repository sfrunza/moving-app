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
  CircularProgress,
} from '@material-ui/core';
import { deepPurple, amber, deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
  },

  subHeader: {
    color: deepPurple['A200'],
    margin: '0px 5px',
    textTransform: 'capitalize',
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
  cityName: {
    display: 'inline-block',
    color: deepPurple[500],
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      padding: '0px'
    },
  },
  buttonsBox: {
    display: 'flex',
    justifyContent: 'space-around',

  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 100,
  },
  longDistanceContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 20px',
    flexDirection: 'column',
  },
  callButton: {
    width: 'fit-content',
    margin: 'auto',
  }
}));

function ResultNew({ movingSize, typeFrom, typeTo, onClose, className, ...rest }) {
  const classes = useStyles();
  const [crewSize, setCrewSize] = useState(0)
  const [travelTime, setTravelTime] = useState([])
  const officeHome = "02446";
  const google = window.google = window.google ? window.google : {}
  const [distance, setDistance] = useState()
  const [addresses, setAddresses] = useState([])
  const [timeBetweenPionts, setTimeBetweenPionts] = useState(null)
  const [minutes, setMinutes] = useState('')
  const [quote, setQuote] = useState('')
  const rate = {
    '2': 90,
    '3': 130,
    '4': 180,
  }
  const times = {
    'Room or less (partial move)': 60,
    'Studio apartment': 120,
    '1 Bedroom apartment': 180,
    '2 Bedroom apartment': 240,
    '2 Bedroom House/Townhouse': 300,
    '3+ Bedroom apartment': 360,
    '3 Bedroom House/Townhouse': 420,
    '4+ Bedroom House/Townhouse': 480,
    'Office / Commercial space': 300,
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
        origin: rest.origin,
        destination: rest.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          let time = Math.round((result.routes[0].legs[0].duration.value / 60) / 10) * 10
          setDistance(Math.floor(result.routes[0].legs[0].distance.value * 0.000621))
          setTimeBetweenPionts(time)
        }
    });
  }

  useEffect(()=> {
    DirectionsService();
    console.log('timebetween effect');
    return () => {
      setTimeBetweenPionts(0)
    }
  },[rest.origin, rest.destination])

  const findTravelTime = () => {
    const TravelTime = new google.maps.DistanceMatrixService();
    TravelTime.getDistanceMatrix({
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
  },[rest.origin, rest.destination])

  const quoteFunction = () => {
    console.log("travel time", travelTime);
    console.log("time between", timeBetweenPionts);
    let totalMinutes = travelTime[0] + travelTime[1] + timeBetweenPionts + times[movingSize]
    let hours = (totalMinutes / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    if(rminutes > 30) {
      rhours +=1
    }
    let lowQuote = rhours * rate[crewSize]
    let highQuote = (rhours + 2) * rate[crewSize]
    setMinutes(`${rhours} - ${rhours+2}`);
    setQuote(`$${lowQuote} - $${highQuote}`)
  }

  useEffect(()=> {
    quoteFunction()
  },[travelTime, timeBetweenPionts])

  if(!distance){
    return (
      <div
        className={clsx(classes.root, className)}
        {...rest}
      >
        <Container maxWidth="sm" className={classes.loadingContainer}>
          <CircularProgress size={80}/>
        </Container>
      </div>
    )
  }


  if(distance > 200) {
    return (
      <div
        className={clsx(classes.root, className)}
        {...rest}
      >

        <Container maxWidth="md" className={classes.container}>
          <Typography
            variant="h6"
            align="center"
            color='textSecondary'
            gutterBottom
            className={classes.header}
          >
            Moving a
            <label
              className={classes.subHeader}
            >{movingSize}</label>
            from
            <label
              className={classes.subHeader}
            >{typeFrom}</label>
             to
             <label
               className={classes.subHeader}
             >{typeTo}</label>
          </Typography>

          <Grid container spacing={3, 0}>
            <Grid item xs>
              <Paper className={classes.paper}>From{" "}<div id='origin' className={classes.cityName}> {addresses[0]}</div></Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>{distance} mi</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>To{" "}<div id='destination' className={classes.cityName}> {addresses[1]}</div></Paper>
            </Grid>
          </Grid>
          <Container maxWidth="sm" className={classes.longDistanceContainer}>
            <Typography
              variant="h3"
              align="center"
              color='textPrimary'
              gutterBottom
              className={classes.header}
            >
              Long Distance Moving
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color='textSecondary'
              gutterBottom
              className={classes.header}
            >
              Call our Office for a Quote
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              href='tel:6172060968'
              className={classes.callButton}
            >
              Call us now
            </Button>
          </Container>
        </Container>
      </div>

    )
  } else {

    return (
      <div
        className={clsx(classes.root, className)}
        {...rest}
      >
        <Container maxWidth="md" className={classes.container}>
          <Typography
            variant="h6"
            align="center"
            color='textSecondary'
            gutterBottom
            className={classes.header}
          >
            Moving a
            <label
              className={classes.subHeader}
            >{movingSize}</label>
            from
            <label
              className={classes.subHeader}
            >{typeFrom}</label>
             to
             <label
               className={classes.subHeader}
             >{typeTo}</label>
          </Typography>

          <Grid container spacing={3, 0}>
            <Grid item xs>
              <Paper className={classes.paper}>From{" "}<div id='origin' className={classes.cityName}> {addresses[0]}</div></Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>{distance} mi</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>To{" "}<div id='destination' className={classes.cityName}> {addresses[1]}</div></Paper>
            </Grid>
          </Grid>

          <Grid alignItems="center" container spacing={3} >
            <Grid item xs={6}>
              <Paper className={classes.paper}><label className={classes.info}>{crewSize}</label> Movers Crew</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}><label className={classes.info}>${rate[crewSize]}</label> / hour </Paper>
            </Grid>
          </Grid>
          <Divider />

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={6}>
              <Paper className={classes.paper}>Estimated Time</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
              <label className={classes.info}>
                {minutes || ''}
              </label> hours</Paper>
            </Grid>
          </Grid>
          <Divider />

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={6}>
              <Paper className={classes.paper}>Travel Time</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={clsx(classes.paper, classes.infoTime)}>{`${travelTime[0]}min/${travelTime[1]}min`}{" "}(from/to HQ)</Paper>
            </Grid>
          </Grid>
          <Divider />

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={6}>
              <Paper className={classes.paper}>Estimated Quote</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
              <label className={classes.infoMoney}>{quote || ""}</label>
              </Paper>

            </Grid>
          </Grid>

          <Box className={classes.buttonsBox} mt={2}>
                <Button
                  onClick={onClose}

                  varinat='outlined'
                >
                  Cancel
                </Button>

                <Button
                  color="secondary"
                  component={RouterLink}
                  to="/book"
                  variant="contained"
                >
                  Get Started
                </Button>
          </Box>


        </Container>
      </div>
    )
  }
}

export default ResultNew;
