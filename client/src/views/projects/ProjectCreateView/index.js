import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
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
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  User as UserIcon,
  Star as StarIcon,
  Truck as TruckIcon,
  File as FileIcon
} from 'react-feather';
import Page from 'src/components/Page';
import MovingDetails from './MovingDetails';
import ProjectDetails from './ProjectDetails';
import CustomerForm from './CustomerForm'
import JobDescriptionForm from './JobDescriptionForm'

const steps = [
  {
    label: 'Moving Details',
    icon: TruckIcon
  },
  {
    label: 'Contact information',
    icon: UserIcon
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
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  avatar: {
    backgroundColor: colors.red[600]
  },
  itemsContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    maxWidth: '747px',
    margin: 'auto'
  },
  item:{
    width: '100%',
    maxWidth: '100%'
  }
}));

function ProjectCreateView() {
  const isMountedRef = useIsMountedRef();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [job, setJob] = useState({});
  const [customer, setCustomer] = useState({})
  const [nextJobId, setNextJobId] = useState(null)

  const getNextJobId = useCallback(() => {
    axios
      .get('http://localhost:3001/api/v1/jobs.json')
      .then((response) => {
        let newId;
        if (response.data.length === 0 ) {
          newId = 1
        } else {
          newId = response.data[0].id +1
        }
        if (isMountedRef.current) {
          setNextJobId(newId);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getNextJobId();
  }, [getNextJobId]);

  if (!nextJobId) {
    return null;
  }

  const onChangeCustomer = (updatedCustomer) => {
    setCustomer({
      customer: {
          ...updatedCustomer
        }
      });
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    setCompleted(true);
  };
  console.log(nextJobId);

  return (
    <Page
      className={classes.root}
      title="Project Create"
    >
      <Container maxWidth="lg">
        <Box mb={3}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              variant="body1"
              color="inherit"
              to="/app"
              component={RouterLink}
            >
              Dashboard
            </Link>
            <Typography
              variant="body1"
              color="textPrimary"
            >
              Projects
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h3"
            color="textPrimary"
          >
            Create Wizard &amp; Process
          </Typography>
        </Box>
        {!completed ? (
          <Paper>
            <Grid container className={classes.itemsContainer}>
              <Grid
                item
                xs={12}
                md={3}
                className={classes.item}
              >
                <Stepper
                  activeStep={activeStep}
                  connector={<CustomStepConnector />}
                  orientation="horizontal"
                  component={Box}
                  bgcolor="transparent"
                >
                  {steps.map((step) => (
                    <Step key={step.label}>
                      <StepLabel StepIconComponent={CustomStepIcon}>
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
                    <MovingDetails id={nextJobId} onNext={handleNext} />
                  )}
                  {activeStep === 1 && (
                    <ProjectDetails
                      onBack={handleBack}
                      onComplete={handleComplete}
                      id={nextJobId}
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
                    Donec ut augue sed nisi ullamcorper posuere sit amet eu mauris.
                    Ut eget mauris scelerisque.
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
                    to="/app/projects/1"
                  >
                    View your Job Details
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
