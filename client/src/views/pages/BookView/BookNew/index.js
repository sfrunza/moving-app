import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
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
import {
  User as UserIcon,
  Clipboard as ClipboardIcon,
  Star as StarIcon,
  Truck as TruckIcon
} from 'react-feather';
import Page from 'src/components/Page';
import ReviewMove2 from './ReviewMove2'
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
    backgroundImage: 'linear-gradient(to bottom, #7c4dff, #7c4dff96), url(https://images.unsplash.com/photo-1570129042283-dbebdfd894de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  },
  paddingMobile: {
    marginTop: '3em',
    marginBottom: '2em',
    [theme.breakpoints.down('xs')]: {
      padding: '0 5px',
      marginTop: '2em',
      marginBottom: '3em',
    },
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
    borderRadius: theme.spacing(1),
  },
  stepper: {
    [theme.breakpoints.down('sm')]: {
      padding: "24px 0px",
    },
  }
}));


function ProjectCreateView() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [formState, setFormState] = useState({
    values: {},
    touched: {},
    isMovingDetailsValid: false,
    isCustomerDetailsValid: false,
    errors: {},
  });


  useEffect(() => {

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
  
  return (
    <Page
      className={classes.root}
      title="Book"
    >
      <Container maxWidth="md" className={classes.paddingMobile}>
        <Box mb={5}>
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
                    <ReviewMove2
                      origin={formState.values.origin.address}
                      destination={formState.values.destination.address}
                      movingSize={formState.values.job.job_size}
                      typeFrom={formState.values.origin.floor}
                      typeTo={formState.values.destination.floor}
                      jobType={formState.values.job.job_type}
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
