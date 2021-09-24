import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
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
} from "@material-ui/core";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Label from "src/components/Label";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ChevronRight from "src/icons/ChevronRight";
import HistoryIcon from "@material-ui/icons/History";
import { useSelector, useDispatch } from "src/store";
import { getCustomerJobs } from "src/slices/customers";
import moment from "moment";
import ArrowRightIcon from "src/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1),
  },
  cardHeader: {
    textAlign: "center",
    // fontSize: "1rem",
  },
  button: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    color: theme.palette.text.secondary,
  },
  arrow: {
    marginLeft: "auto",
    color: theme.palette.text.secondary,
  },
  menuBox: {
    flexDirection: "column",
    width: "100%",
  },
  menuBoxActive: {
    backgroundColor: theme.palette.background.level2,
  },
  statusBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "-5px",
    "& span ": {
      fontSize: "10px",
      backgroundColor: "transparent",
    },
  },
  topInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
}));

function getStatusLabel(status) {
  const map = {
    Completed: {
      text: "Completed",
      color: "primary",
    },
    Canceled: {
      text: "Canceled",
      color: "error",
    },
    "Needs Attention": {
      text: "Needs Attention",
      color: "warning",
    },
    Confirmed: {
      text: "Confirmed",
      color: "success",
    },
  };

  const { text, color } = map[status];

  return <Label color={color}>{text}</Label>;
}

function OtherActions({ user, event, history, ...rest }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const ITEM_HEIGHT = 48;
  const { customerJobs } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(getCustomerJobs(user.id));
  }, [dispatch, user.id]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!customerJobs) {
    return null;
  }

  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardHeader
        title="HELPFUL LINKS"
        className={classes.cardHeader}
        titleTypographyProps={{ variant: "caption" }}
      />
      <Divider />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Button
            className={classes.button}
            component={ButtonBase}
            onClick={handleOpen}
            ref={ref}
          >
            <HistoryIcon className={classes.actionIcon} />
            My Moves History (
            <span style={{ fontWeight: 600 }}>{customerJobs.length}</span>)
            <ChevronRight className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>

          <Menu
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            keepMounted
            getContentAnchorEl={null}
            anchorEl={ref.current}
            open={isOpen}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 6,
              },
              className: classes.popover,
            }}
          >
            {customerJobs.map((job, i) => {
              return (
                <MenuItem
                  key={i}
                  open={isOpen}
                  className={job.id === event.id ? classes.menuBoxActive : null}
                  onClick={(e) => {
                    job.id !== event.id
                      ? history.push(`/dashboard/jobs/${job.id}`)
                      : e.preventDefault();
                  }}
                >
                  <Box display="flex" className={classes.menuBox}>
                    <Box className={classes.topInfo}>
                      <Box>
                        <Typography variant="body2">
                          {moment(job.pick_up_date).format("MM/DD/YYYY")}
                        </Typography>
                      </Box>
                      <Box className={classes.topInfo} ml={1}>
                        {job.origin && (
                          <Box>
                            <Typography variant="body2">
                              {job.origin.city},{job.origin.state}
                            </Typography>
                          </Box>
                        )}
                        {job.destination?.city && (
                          <ArrowRightIcon
                            style={{ width: 14, margin: "0 8px" }}
                            className={clsx(classes.actionIcon, classes.arrow)}
                          />
                        )}

                        {job.destination?.city && (
                          <Box>
                            <Typography variant="body2">
                              {job.destination.city},{job.destination.state}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box className={classes.statusBox}>
                      <Typography>
                        {getStatusLabel(job.job_status)}
                        {job.job_duration ? (
                          <Typography
                            variant="caption"
                            style={{ marginLeft: 4 }}
                          >
                            {job.job_duration}hr
                          </Typography>
                        ) : null}
                      </Typography>
                    </Box>
                    <Divider />
                  </Box>
                </MenuItem>
              );
            })}
          </Menu>

          <Button className={classes.button}>
            <BeachAccessIcon className={classes.actionIcon} />
            Certificate of Insurance
            <ChevronRight className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>
          <Button className={classes.button}>
            <FileCopyIcon className={classes.actionIcon} />
            Bill of Lading
            <ChevronRight className={clsx(classes.actionIcon, classes.arrow)} />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

OtherActions.propTypes = {
  className: PropTypes.string,
};

export default OtherActions;
