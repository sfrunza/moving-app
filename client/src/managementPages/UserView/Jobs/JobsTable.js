import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import Scrollbar from "../../Scrollbar";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  withStyles,
  Button,
} from "@material-ui/core";
import moment from "moment";
import StatusLabel from "src/components/StatusLabel";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.level2,
    color: theme.palette.text.secondary,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function JobsTable({ className, jobs }) {
  return (
    <div>
      <Card>
        <CardHeader title="Jobs" />
        <Divider />
        <Scrollbar>
          <Box minWidth={700}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>#</StyledTableCell>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell>Hours</StyledTableCell>
                  <StyledTableCell>Service</StyledTableCell>

                  <StyledTableCell>Size</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
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
                      {moment(job.pick_up_date).format("MMM DD, YYYY")}
                    </TableCell>

                    <TableCell>{job.job_duration || 0}</TableCell>
                    <TableCell>{job.job_type}</TableCell>
                    <TableCell>{job.job_size}</TableCell>
                    <TableCell>
                      <StatusLabel status={job.job_status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <TablePagination
          component="div"
          count={jobs.length}
          onPageChange={() => {}}
          onRowsPerPageChange={() => {}}
          page={0}
          rowsPerPage={5}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </div>
  );
}

JobsTable.propTypes = {
  className: PropTypes.string,
};

export default JobsTable;
