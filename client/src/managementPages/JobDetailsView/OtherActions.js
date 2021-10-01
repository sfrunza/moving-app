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
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ChevronRight from "src/icons/ChevronRight";
import HistoryIcon from "@material-ui/icons/History";
import { useSelector, useDispatch } from "src/store";
import { getCustomer } from "src/slices/customers";
import moment from "moment";
import ArrowRightIcon from "src/icons/ArrowRight";
import StatusLabel from "src/components/StatusLabel";
import DocumentText from "src/icons/DocumentText";

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1),
  },
  cardHeader: {
    textAlign: "center",
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
    padding: 0,
    "& span ": {
      fontSize: 10,
      backgroundColor: "transparent",
      fontWeight: 400,
      padding: 0,
    },
  },
  topInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
}));

function OtherActions({ customer, event, history, ...rest }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const ITEM_HEIGHT = 48;
  const { customerJobs } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(getCustomer(customer.id));
  }, [dispatch, customer.id]);

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
                        <Typography variant="body2" color="textSecondary">
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
                        <StatusLabel status={job.job_status} />
                        {job.job_duration ? (
                          <Typography
                            variant="caption"
                            color="textSecondary"
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
          <Button className={classes.button} disabled={!event.receipt}>
            <DocumentText className={classes.actionIcon} />
            Moving Receipt
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
