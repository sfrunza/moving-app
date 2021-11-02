import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import Scrollbar from "../Scrollbar";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  Button,
} from "@material-ui/core";
import { ArrowRight as ArrowRightIcon } from "react-feather";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import StatusLabel from "src/components/StatusLabel";

const useStyles = makeStyles((theme) => ({
  hoverIcon: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.level2,
    color: theme.palette.text.secondary,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function Jobs({ className, jobs }) {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardHeader title="Customer jobs" />
        <Divider />
        <Scrollbar>
          <Box minWidth={1300}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>#</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Service</StyledTableCell>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell>Size</StyledTableCell>
                  <StyledTableCell>Crew</StyledTableCell>
                  <StyledTableCell>Created at</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id} hover>
                    <TableCell>
                      <Button
                        component={RouterLink}
                        to={`/dashboard/jobs/${job.id}`}
                        disableElevation
                      >
                        {job.id}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <StatusLabel status={job.job_status} />
                    </TableCell>
                    <TableCell>{job.job_type}</TableCell>
                    <TableCell>
                      {moment(job.pick_up_date).format("MMM DD, YYYY")}
                    </TableCell>
                    <TableCell>{job.job_size}</TableCell>
                    <TableCell>{job.crew_size}</TableCell>
                    <TableCell variant="footer">
                      {moment(job.created_at).format("MM/DD/YYYY")}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        component={RouterLink}
                        to={`/dashboard/jobs/${job.id}`}
                        classes={{ root: classes.hoverIcon }}
                      >
                        <SvgIcon fontSize="small">
                          <ArrowRightIcon />
                        </SvgIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
      </Card>
    </div>
  );
}

Jobs.propTypes = {
  className: PropTypes.string,
};

export default Jobs;
