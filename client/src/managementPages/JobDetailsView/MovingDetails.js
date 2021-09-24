import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  content: {
    padding: 0,
    "& .MuiTableCell-root": {
      borderBottom: "none",
    },
  },
  headerDistance: {
    textAlign: "center",
    paddingBottom: theme.spacing(1),
  },
  addInfoContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 15px",
  },
  addInfoTitle: {
    fontSize: "14px",
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    fontWeight: 600,
  },
  addInfoSubTitle: {
    backgroundColor: theme.palette.background.level2,
    padding: "15px",
    wordWrap: "break-word",
    display: "flex",
    flexDirection: "column",
  },
  address: {
    textTransform: "uppercase",
    fontSize: 14,
  },
  paragraph: {
    fontStyle: "italic",
    fontSize: 12,
  },
  margTop: {
    marginTop: 6,
  },
}));

function MovingDetails({
  job,
  className,
  images,
  setImages,
  handleDeleteImage,
  disableShadow,
  disableHeader,
  setJob,
  removeAddPickup,
  ...rest
}) {
  const classes = useStyles();
  // const initMap = () => {};

  console.log(job.estimated_quote[0][0]);

  return (
    <Card
      {...rest}
      className={clsx(disableShadow ? classes.root : {}, className)}
    >
      <CardHeader title="Move Overview" />
      <div
        style={{
          width: `97%`,
          margin: `auto`,
        }}
      >
        <img
          src="https://www.jqueryscript.net/images/direction-route-google-maps.jpg"
          alt="maps"
          height="200"
          width="100%"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <CardContent className={classes.content}>
        <Box className={classes.headerDistance}>10</Box>
        <Divider />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Move date:</TableCell>
              <TableCell style={{ fontWeight: 700 }}>
                {moment(job.pick_up_date).format("dddd, MMMM DD, YYYY")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Arrival time:</TableCell>
              <TableCell style={{ fontWeight: 700 }}>
                {moment(job.pick_up_date).format("h A")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {!job.destination.address ? "Address:" : "Moving from:"}
              </TableCell>
              <TableCell style={{ display: "flex", flexDirection: "column" }}>
                {job.origin.address},
                <Typography style={{ fontWeight: 600 }} variant="body2">
                  {job.origin.city}, {job.origin.state}, {job.origin.zip}
                </Typography>
                {job.origin.apt_number && (
                  <Typography variant="caption" color="textSecondary">
                    Apt #{job.origin.apt_number}
                  </Typography>
                )}
                <Typography variant="caption" color="textSecondary">
                  *{job.origin.floor ? job.origin.floor : job.destination.floor}
                </Typography>
              </TableCell>
            </TableRow>
            {job.destination.address ? (
              <TableRow>
                <TableCell>Moving to:</TableCell>
                <TableCell style={{ display: "flex", flexDirection: "column" }}>
                  {job.destination.address},
                  <Typography style={{ fontWeight: 600 }} variant="body2">
                    {job.destination.city}, {job.destination.state},
                    {job.destination.zip}
                  </Typography>
                  {job.destination.apt_number && (
                    <Typography variant="caption" color="textSecondary">
                      Apt #{job.destination.apt_number}
                    </Typography>
                  )}
                  <Typography variant="caption" color="textSecondary">
                    *{job.destination.floor}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : null}
            <TableRow>
              <TableCell style={{ padding: "0px" }}>
                <Divider />
              </TableCell>
              <TableCell style={{ padding: "0px" }}>
                <Divider />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Service:</TableCell>
              <TableCell>{job.job_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Move size:</TableCell>
              <TableCell style={{ fontWeight: 700 }}>{job.job_size}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ padding: "0px" }}>
                <Divider />
              </TableCell>
              <TableCell style={{ padding: "0px" }}>
                <Divider />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Crew:</TableCell>
              <TableCell style={{ fontWeight: 700 }}>
                {job.crew_size} movers
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hourly rate:</TableCell>
              <TableCell
                children={
                  <Typography
                    variant="body1"
                    color="primary"
                    style={{ fontWeight: 700 }}
                  >
                    ${job.job_rate}/hr
                  </Typography>
                }
              />
            </TableRow>
            {job.job_status === "Completed" ? (
              <TableRow>
                <TableCell>Duration:</TableCell>
                <TableCell
                  style={{
                    color: "#FD7013",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  <label>{job.job_duration || ""}</label> hours
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell>Estimated time:</TableCell>
                <TableCell
                  children={
                    <Typography
                      variant="body1"
                      color="secondary"
                      style={{ fontWeight: 700 }}
                    >
                      {job.estimated_time[0]} - {job.estimated_time[1]} hours*
                    </Typography>
                  }
                />
              </TableRow>
            )}
            {job.job_status === "Completed" ? null : (
              <TableRow>
                <TableCell>Travel time:</TableCell>
                <TableCell>
                  <label>
                    {job.travel_time[0]}/{job.travel_time[1]} min* (from/to HQ)
                  </label>
                </TableCell>
              </TableRow>
            )}
            {job.job_status === "Completed" ? (
              <TableRow>
                <TableCell>Total:</TableCell>
                <TableCell style={{ fontWeight: 600, fontSize: "18px" }}>
                  <label>${job.total_amount}</label>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell>Estimated quote:</TableCell>
                <TableCell style={{ fontWeight: 600, fontSize: "18px" }}>
                  <label>
                    ${job.estimated_quote[0]} - ${job.estimated_quote[1]}{" "}
                  </label>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Divider />
        {job.job_status === "Completed" ? null : (
          <Box mt={2} className={classes.addInfoContainer}>
            <Typography variant="body2" className={classes.paragraph}>
              <span
                style={{ color: "red", fontWeight: 500, marginRight: "8px" }}
              >
                NOTE:
              </span>
              <span style={{ fontWeight: 700 }}>
                This quote is just an estimate and provided for your convinience
                only.
              </span>
              &nbsp;We give you a database average for generally similar moves.
              However, your final cost is based on hourly rate and actual time
              your move will take. Additional time may be required if your move
              involves long walks, narrow stares, furniture disassembly, bad
              weather conditions, etc.
            </Typography>
            <Typography variant="body2" className={classes.paragraph}>
              * Total moving time consist of 2 hours minimum labour time plus
              fixed travel time.
            </Typography>
            <Typography
              variant="body2"
              className={clsx(classes.paragraph, classes.margTop)}
            >
              We accept cash, checks, credit cards. If you choose to pay with a
              credit cardor debit card, you will be charged a fee of 3% of the
              payment amount.
            </Typography>
          </Box>
        )}

        <Box mt={4} className={classes.addInfoContainer}>
          <Box>
            <Typography className={classes.addInfoTitle}>
              Additional Information:
            </Typography>
          </Box>
        </Box>
        <Box className={classes.addInfoContainer}>
          <Box mt={2} className={classes.addInfoSubTitle}>
            <Typography variant="body2" color="textPrimary">
              {job.additional_info}
            </Typography>

            {/* <GridGallery
              images={images}
              jobStatus={job.job_status}
              handleDeleteImage={handleDeleteImage}
            />
            {job.job_status === "Completed" ? null : (
              <Uploader
                jobId={job.id}
                images={images}
                setImages={setImages}
                text="Add photo to inventory"
              />
            )} */}
          </Box>
          {job.job_status === "Completed" ? null : (
            <Typography
              variant="body2"
              style={{ fontSize: 12 }}
              className={classes.margTop}
            >
              Long distance moves are FLAT RATE and REQUIRED the list of all
              furniture and approximate amount of boxes.
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

MovingDetails.propTypes = {
  className: PropTypes.string,
  disableShadow: PropTypes.bool,
  disableHeader: PropTypes.bool,
};

export default MovingDetails;
