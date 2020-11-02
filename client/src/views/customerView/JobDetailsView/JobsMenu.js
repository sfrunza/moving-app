import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
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
} from '@material-ui/core';
import axios from 'axios';
import Label from 'src/components/Label';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HistoryIcon from '@material-ui/icons/History';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
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
  }
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

function JobsMenu({ className, job, setJobDetails, handleClose, isOpen, theJob, ...rest }) {
  const classes = useStyles();
  const [fullJob, setFullJob] = useState()
  const currentJob = theJob.id

  useEffect(() => {
    let mounted = true;

    const fetchJobs = () => {
      axios.get(`/api/v1/jobs/${job.id}`).then((response) => {
        if (mounted) {
          setFullJob(response.data);
        }
      });
    }
    fetchJobs();

    return () => {
      mounted = false;
    };
  }, [job.id]);

  if (!fullJob) {
    return null;
  }

  const getCity = (string) => {
    var arr = string.split(",");
    var fst = arr.splice(1,2).join(",");
    return fst
  }

  return (
    <MenuItem
      key={job.id}
      open={isOpen}
      onClick={() => {
        setJobDetails(job);
        localStorage.setItem('jobDetails', JSON.stringify(job))
        handleClose();
      }}
      className={currentJob === job.id ? classes.menuBoxActive : null
      }
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
            {getCity(fullJob.origin.address)}
          </Box>
          <Box>
            <ArrowRightAltIcon />
          </Box>
          <Box>
            {getCity(fullJob.destination.address)}
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
  );
}

JobsMenu.propTypes = {
  className: PropTypes.string
};

export default JobsMenu;
