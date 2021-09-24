import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";
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
  Button,
  Typography,
} from "@material-ui/core";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
import deepPurple from "@material-ui/core/colors/deepPurple";
import GridGallery from "./GridGallery";
import Uploader from "src/components/Uploader";

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
    backgroundColor: "#f4f6f8",
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

function Completed({
  job,
  className,
  images,
  setImages,
  handleDeleteImage,
  disableShadow,
  disableHeader,
  ...rest
}) {
  const classes = useStyles();
  const apiKey = "AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ";
  const google = (window.google = window.google ? window.google : {});
  const [distance, setDistance] = useState();

  const initMap = () => {
    let origin = job.origin.address;
    let destination = job.destination.address;
    const MapWithADirectionsRenderer = compose(
      withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: (
          <div
            style={{
              height: `200px`,
              width: `98%`,
              margin: `1% auto`,
            }}
          />
        ),
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          //map with direction from pickup to delivery
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route(
            {
              origin: origin,
              destination: destination,
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                });
                setDistance(result.routes[0].legs[0].distance.text);
              }
            }
          );
        },
      })
    )((props) => (
      <GoogleMap
        defaultZoom={7}
        defaultOptions={{ mapTypeControl: false, streetViewControl: false }}
        defaultCenter={new google.maps.LatLng(42.5659907, -72.2317007)}
      >
        {props.directions && (
          <DirectionsRenderer directions={props.directions} />
        )}
      </GoogleMap>
    ));
    return <MapWithADirectionsRenderer google={google} />;
  };

  return (
    <Card
      {...rest}
      className={clsx(disableShadow ? classes.root : {}, className)}
    >
      {disableHeader ? null : (
        <CardHeader
          title={`Request ID: ${job.job.id}`}
          action={
            job.job.job_status === "Completed" ? (
              <Button variant="text" color="secondary">
                View Receipt
              </Button>
            ) : null
          }
          subheader={job.job.job_status}
        />
      )}
      {/*{initMap()}*/}

      <CardContent className={classes.content}>
        <Box className={classes.headerDistance}>
          <Typography color="textSecondary">{distance}</Typography>
        </Box>
        <Divider />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Moving Date: </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                {job.job.delivery_date ? (
                  <Box>
                    {moment(job.job.pick_up_date, "MM/DD/YYYY").format(
                      "dddd, MMMM D, YYYY"
                    )}{" "}
                    <span
                      style={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        fontWeight: 300,
                      }}
                    >
                      to storage
                    </span>
                  </Box>
                ) : (
                  moment(job.job.pick_up_date, "MM/DD/YYYY").format(
                    "dddd, MMMM D, YYYY"
                  )
                )}
              </TableCell>
            </TableRow>
            {job.job.delivery_date === null ? null : (
              <TableRow>
                <TableCell>Delivery Date: </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  {moment(job.job.delivery_date, "MM/DD/YYYY").format(
                    "dddd, MMMM D, YYYY"
                  )}
                </TableCell>
              </TableRow>
            )}
            <TableRow>
              <TableCell>Moving From: </TableCell>
              <TableCell>
                <Box>
                  <Typography className={classes.address}>
                    {job.origin.address}
                  </Typography>
                </Box>
                <Box
                  component="div"
                  display="inline"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  *{job.origin.floor}
                </Box>
                <Box
                  component="div"
                  display="inline"
                  ml={2}
                  style={{ fontSize: "12px" }}
                >
                  Apt# {job.origin.apt_number}
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moving To:</TableCell>
              <TableCell>
                <Box>
                  <Typography className={classes.address}>
                    {job.destination.address}
                  </Typography>
                </Box>
                <Box
                  component="div"
                  display="inline"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  *{job.destination.floor}
                </Box>
                <Box
                  component="div"
                  display="inline"
                  ml={2}
                  style={{ fontSize: "12px" }}
                >
                  Apt# {job.destination.apt_number}
                </Box>
              </TableCell>
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
              <TableCell>Moving Type:</TableCell>
              <TableCell>{job.job.job_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moving Size:</TableCell>
              <TableCell style={{ fontWeight: 600 }}>
                {job.job.job_size}
              </TableCell>
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
              <TableCell style={{ fontWeight: 600 }}>
                {job.job.crew_size} movers
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Rate:</TableCell>
              <TableCell
                style={{
                  color: deepPurple["A200"],
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <label>${job.job.job_rate}</label>/hr{" "}
                <label
                  style={{
                    color: "grey",
                    fontSize: "12px",
                    fontStyle: "italic",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  - billed in 15 minutes increment
                </label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Job Duration:</TableCell>
              <TableCell
                style={{
                  color: "#FD7013",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <label>{job.job.job_duration || "duration"}</label> hours
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Travel Time:</TableCell>
              <TableCell>
                <label>{job.job.travel_time} (from/to HQ)</label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Total Amount:</TableCell>
              <TableCell style={{ fontWeight: 600, fontSize: "18px" }}>
                <label>${job.job.total_amount || "amount"}</label>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Divider />
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
              {job.job.additional_info}
            </Typography>

            <GridGallery
              images={images}
              handleDeleteImage={handleDeleteImage}
            />
            <Uploader
              jobId={job.job.id}
              images={images}
              setImages={setImages}
              text="Add photo to inventory"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

Completed.propTypes = {
  className: PropTypes.string,
  disableShadow: PropTypes.bool,
  disableHeader: PropTypes.bool,
};

export default Completed;
