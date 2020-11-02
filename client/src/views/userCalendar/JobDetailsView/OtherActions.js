import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import axios from 'axios';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography,
  makeStyles,
  ButtonBase,
  Menu,
  MenuItem,
  colors
} from '@material-ui/core';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Label from 'src/components/Label';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HistoryIcon from '@material-ui/icons/History';
import LoadingScreen from 'src/components/LoadingScreen';
import moment from 'moment';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  root: {},
  deleteAction: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  actionIcon: {
    marginRight: theme.spacing(1)
  },
  cardHeader: {
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
  },
  arrow: {
    marginLeft: 'auto'
  },
  menuBox: {
    flexDirection: 'column',
    width: '100%',
  },
  menuBoxActive: {
    backgroundColor: '#0000000a',
  },
  statusBox: {
    marginTop: '-10px',
    '& span ': {
      fontSize: '10px',
      backgroundColor: 'transparent',
    },
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // popover: {
  //   minWidth: 400,
  // }
}));

function getInventoryLabel(status) {
  const map = {
    "Completed": {
      text: 'Completed',
      color: 'secondary'
    },
    "Canceled": {
      text: 'Canceled',
      color: 'error'
    },
    "Needs Attention" : {
      text: 'Needs Attention',
      color: 'warning'
    },
    "Confirmed" : {
      text: 'Confirmed',
      color: 'success'
    }
  };

  const { text, color } = map[status];

  return (
    <Label color={color}>
      {text}
    </Label>
  );
}

function OtherActions({ className, userId, history, job, ...rest }) {
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [jobs, setJobs] = useState();
  const [origins, setOrigins] = useState();
  const [destinations, setDestinations] = useState();
  const ITEM_HEIGHT = 48;
  const currentJob = job.id

  useEffect(() => {
    let mounted = true;


    const fetchJobs = () => {

      axios.get(`/api/v1/users/${userId}`).then((response) => {
        if (mounted) {
          setJobs(response.data.jobs);
          setOrigins(response.data.origins);
          setDestinations(response.data.destinations);
        }
      });
    };
    fetchJobs();

    return () => {
      mounted = false;
    };
  }, [userId]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (!jobs || !origins || !destinations) {
    return null;
  }

  const getCity = (string) => {
    var arr = string.split(",");
    var fst = arr.splice(1,2).join(",");
    return fst
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="HELPFUL LINKS" className={classes.cardHeader}/>
      <Divider />
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Button
            className={classes.button}
            component={ButtonBase}
            onClick={handleOpen}
            ref={ref}
          >
            <HistoryIcon className={classes.actionIcon} />
              My Moves History ({jobs.length})
              <ArrowForwardIosIcon className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>

            <Menu
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              keepMounted
              getContentAnchorEl={null}
              anchorEl={ref.current}
              open={isOpen}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 6,
                },
                className: classes.popover
              }}
            >
              {
                jobs.map((job, i) => {
                  var newOrigin = ''
                  var newDestination = ''
                  origins.map(origin => {
                    if(origin.job_id === job.id) {
                      newOrigin = origin.address
                    }
                  })
                  destinations.map(destination => {
                    if(destination.job_id === job.id) {
                      newDestination = destination.address
                    }
                  })
                  return(
                    <MenuItem
                      key={i}
                      open={isOpen}
                      className={job.id === currentJob ? classes.menuBoxActive : null
                      }
                      onClick={() => {
                        history.push(`/calendar/${job.id}`)
                      }}
                    >
                      <Box
                        display="flex"
                        className={classes.menuBox}
                      >
                        <Box className={classes.topInfo}>
                          <Box>
                            {moment(job.pick_up_date, 'MM/DD/YYYY').format("MMM DD, YYYY")}
                          </Box>
                          <Box>
                            {getCity(newOrigin)}
                          </Box>
                          <Box>
                            <ArrowRightAltIcon />
                          </Box>
                          <Box>
                            {getCity(newDestination)}
                          </Box>

                        </Box>
                        <Box
                          className={classes.statusBox}
                        >
                          {getInventoryLabel(job.job_status)}
                        </Box>
                        <Divider />
                      </Box>

                    </MenuItem>
                  )
                })
              }
            </Menu>

          <Button className={classes.button}>
            <BeachAccessIcon className={classes.actionIcon} />
              Certificate of Insurance
            <ArrowForwardIosIcon className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>
          <Button className={classes.button}>
            <FileCopyIcon className={classes.actionIcon} />
              Bill of Lading
            <ArrowForwardIosIcon className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>
        </Box>
        <Box
          mt={1}
          mb={2}
        >
          <Typography
            variant="body2"
            color="textSecondary"
          >
            Remove this customer’s data if he requested that, if not please
            be aware that what has been deleted can never brough back
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
