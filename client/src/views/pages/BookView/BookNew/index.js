import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen';
import axios from 'axios';
import validate from 'validate.js';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  makeStyles,
  withStyles,
  colors
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import {
  User as UserIcon,
  Clipboard as ClipboardIcon,
  Star as StarIcon,
  Truck as TruckIcon
} from 'react-feather';
import Page from 'src/components/Page';
import ReviewMove from './ReviewMove'
import MovingForm from './MovingForm'
import CustomerForm from './CustomerForm'

const steps = [
  {
    label: 'Moving Details',
    icon: TruckIcon
  },
  {
    label: 'Contact Information',
    icon: UserIcon
  },
  {
    label: 'Review Details',
    icon: ClipboardIcon
  }
];

const CustomStepConnector = withStyles((theme) => ({
  horizontal: {
    margin: '0px 2em',
    padding: 0,
  },
  line: {
    borderColor: theme.palette.divider,
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px'
  }
}))(StepConnector);

const useCustomStepIconStyles = makeStyles((theme) => ({
  root: {},
  active: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[10]
  },
  completed: {
    backgroundColor: theme.palette.secondary.main,
  }
}));



function CustomStepIcon({ active, completed, icon }) {
  const classes = useCustomStepIconStyles();

  const Icon = steps[icon - 1].icon;

  return (
    <Avatar
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      <Icon size="20" />
    </Avatar>
  );
}

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.number
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to bottom, #663ab787, #663ab78c), url(https://images.unsplash.com/photo-1570129042283-dbebdfd894de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)',
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
  paddingMobile: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8, 0),
    },
    padding: theme.spacing(8, 1, 6),
  },
  avatar: {
    backgroundColor: colors.red[600]
  },
  itemsContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    maxWidth: '747px',
    margin: 'auto',
    padding: '2em 0em',
  },
  item:{
    width: '100%',
    maxWidth: '100%'
  },
  alert: {
    fontSize: '16px',
  },
  borderRadius: {
    borderRadius: '16px',
  },
  stepper: {
    [theme.breakpoints.down('sm')]: {
      padding: "24px 0px",
    },
  }
}));


function ProjectCreateView() {
  const isMountedRef = useIsMountedRef();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(10)
  const [formState, setFormState] = useState({
    values: {},
    touched: {},
    isMovingDetailsValid: false,
    isCustomerDetailsValid: false,
    errors: {},
  });


  React.useEffect(() => {

    setFormState(formState => ({
      ...formState,
    }));
  }, [formState.values]);

  const handleSubmit = () => {
    setCompleted(true)
    //User POST
    var user = formState.values.user
    axios.post('api/v1/users', {user}, {withCredentials: true})
      .then(response => {
        let userId = response.data.user.id;
        var job = formState.values.job
        job.user_id = userId;
        axios.post('api/v1/jobs', {job} )
          .then(response => {
            let jobId = response.data.job.id;
            var origin = formState.values.origin;
            var destination = formState.values.destination;
            origin.job_id = jobId;
            destination.job_id = jobId;
            axios.post(`api/v1/jobs/${jobId}/origins`, {origin} )
            axios.post(`api/v1/jobs/${jobId}/destinations`, {destination} )
        })
        .catch(error => console.log('api errors:', error))
    })
    .catch(error => console.log('api errors:', error))

  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  };

  const handleComplete = () => {
    setCompleted(true);
  };

  const hasError = field =>
    { return formState.touched[field] && formState.errors[field] ? true : false }

  return (
    <Page
      className={classes.root}
      title="Book"
    >
      <Container maxWidth="md" className={classes.paddingMobile}>
        <Box mb={3}>
        </Box>
        {!completed ? (
          <Paper className={classes.borderRadius}>
            <Grid container className={classes.itemsContainer}>
              <Grid
                item
                xs={12}
                md={3}
                className={classes.item}
              >
                <Stepper
                  activeStep={activeStep}
                  orientation="horizontal"
                  component={Box}
                  bgcolor="transparent"
                  className={classes.stepper}
                >
                  {steps.map((step) => (
                    <Step key={step.label}>
                      <StepLabel StepIconComponent={CustomStepIcon} >
                        {step.label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
              <Grid
                item
                xs={12}
                md={9}
                className={classes.item}
              >
                <Box p={3}>
                  {activeStep === 0 && (
                    <MovingForm
                      onNext={handleNext}
                      setFormState={setFormState}
                      formState={formState}
                    />
                  )}
                  {activeStep === 1 && (
                    <CustomerForm
                      onBack={handleBack}
                      onNext={handleNext}
                      setFormState={setFormState}
                      formState={formState}
                    />
                  )}
                  {activeStep === 2 && (
                    <ReviewMove
                      origin={formState.values.origin.address}
                      destination={formState.values.destination.address}
                      movingsize={formState.values.job.job_size}
                      typefrom={formState.values.origin.floor}
                      typeto={formState.values.destination.floor}
                      onBack={handleBack}
                      onSubmit={handleSubmit}
                      setFormState={setFormState}
                      formState={formState}
                    />
                  )}

                </Box>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Card>
            <CardContent>
              <Box
                maxWidth={450}
                mx="auto"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                >
                  <Avatar className={classes.avatar}>
                    <StarIcon />
                  </Avatar>
                </Box>
                <Box mt={2}>
                  <Typography
                    variant="h3"
                    color="textPrimary"
                    align="center"
                  >
                    You are all done!
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                  >
                    <Alert severity="info" className={classes.alert}>An email has been sent to you with Login and Password to view your Moving Details!</Alert>
                  </Typography>
                </Box>
                <Box
                  mt={2}
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    component={RouterLink}
                    to="/login"
                  >
                    View your Moving Details
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}
      </Container>
    </Page>
  );
}

export default ProjectCreateView;
