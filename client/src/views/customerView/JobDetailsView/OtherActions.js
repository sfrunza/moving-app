import React, {
  useRef,
  useState
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
import Label from 'src/components/Label';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HistoryIcon from '@material-ui/icons/History';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
import moment from 'moment';
import JobsMenu from './JobsMenu'

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
    flexDirection: 'column'
  },
  statusBox: {
    '& span ': {
      fontSize: '10px',
      backgroundColor: 'transparent',
    },
  },
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

function OtherActions({ className, jobs, setJobDetails, ...rest }) {
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const ITEM_HEIGHT = 48;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              My Moves History{' '}({jobs.length})
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
                  return(
                    <JobsMenu
                      key={job.id}
                      handleClose={handleClose}
                      setJobDetails={setJobDetails}
                      job={job}
                      isOpen={isOpen}
                    />
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
          <Button
            className={classes.button}
            href="mailto:info@insightmoving.com"
          >
            <MailOutlineIcon className={classes.actionIcon}/>
              Email Us
            <ArrowForwardIosIcon className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>
          <Button
            className={classes.button}
            href="tel:6172060968"
          >
            <PhoneInTalkRoundedIcon className={classes.actionIcon} />
              (617) 206-0968
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
