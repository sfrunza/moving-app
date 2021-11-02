import React, { useState, useEffect } from "react";
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
import GridGallery from "../../managementPages/JobDetailsView/GridGallery";
import Uploader from "../../managementPages/JobDetailsView/Uploader";
import { useDispatch } from "src/store";
import StatusLabel from "src/components/StatusLabel";
import { useJsApiLoader } from "@react-google-maps/api";

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
    color: theme.palette.primary.main,
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
  paragraph: {
    fontStyle: "italic",
    fontSize: 12,
  },
  margTop: {
    marginTop: 6,
  },
  cardAction: { alignSelf: "center" },
}));

const getDaysDiff = (start_date, end_date, date_format = "YYYY-MM-DD") => {
  const getDateAsArray = (date) => {
    return moment(date.split(/\D+/), date_format);
  };
  return getDateAsArray(end_date).diff(getDateAsArray(start_date), "days");
};

function MovingDetails({ job, ...rest }) {
  const classes = useStyles();
  const google = (window.google = window.google ? window.google : {});
  const [distance, setDistance] = useState();
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ",
  });

  useEffect(() => {
    if (job.id) {
      setMap(initMap());
    }
    return () => {
      setMap(null);
    };
  }, [job.id]);

  const initMap = () => {
    let origin =
      job.origin.address + "," + job.origin.city + "," + job.origin.zip;
    let destination = "";
    if (job.destination.address === "") {
      destination =
        job.origin.address + "," + job.origin.city + "," + job.origin.zip;
    } else {
      destination =
        job.destination.address +
        "," +
        job.destination.city +
        "," +
        job.destination.zip;
    }

    let waypts = [];
    if (job.origin.add_address) {
      waypts = [{ location: job.origin.add_address }];
    } else {
      waypts = null;
    }

    const MapWithADirectionsRenderer = compose(
      withProps({
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: (
          <div
            style={{
              height: `30vh`,
              width: `100%`,
              margin: `auto`,
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
              waypoints: waypts,
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
        defaultZoom={12}
        defaultCenter={new google.maps.LatLng(42.36, -71.06)}
        defaultOptions={{
          mapTypeControl: false,
          streetViewControl: false,
          panControl: false,
          // zoomControl: false,
          scaleControl: false,
          fullscreenControl: false,
          // draggable: false,
          scrollwheel: false,
          styles: [
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#c4e5ff",
                },
              ],
            },
            {
              featureType: "transit",
              stylers: [
                {
                  color: "#808080",
                },
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#b3b3b3",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#ffffff",
                },
                {
                  weight: 1.8,
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#d7d7d7",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#ebebeb",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  color: "#a7a7a7",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#efefef",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#696969",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#737373",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#d6d6d6",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {},
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#dadada",
                },
              ],
            },
          ],
        }}
      >
        {props.directions && (
          <DirectionsRenderer directions={props.directions} />
        )}
      </GoogleMap>
    ));
    return <MapWithADirectionsRenderer google={google} />;
  };

  return (
    <Card {...rest} className={classes.root}>
      <CardHeader
        title={`Request ID: ${job.id}`}
        subheader={<StatusLabel status={job.job_status} />}
        action={
          job.job_status === "Completed" ? (
            <Button variant="outlined" color="primary" size="small">
              View Receipt
            </Button>
          ) : null
        }
        classes={{ action: classes.cardAction }}
      />
      {isLoaded && map}

      <CardContent className={classes.content}>
        <Box className={classes.headerDistance}>
          <Typography color="textSecondary">{distance}</Typography>
        </Box>
        <Divider />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Move date:</TableCell>
              <TableCell
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: 700,
                }}
              >
                {moment(job.pick_up_date).format("dddd, MMMM DD, YYYY")}
                {job.job_type === "Moving with Storage" && (
                  <Typography variant="caption" color="textSecondary">
                    *storage till{" "}
                    {moment(job.delivery_date).format("MMMM DD, YYYY")}
                  </Typography>
                )}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Start time:</TableCell>
              <TableCell style={{ fontWeight: 700 }}>
                {moment(job.pick_up_date).format("h A")}
              </TableCell>
            </TableRow>

            {job.delivery_date === null ? null : (
              <TableRow>
                <TableCell>Delivery Date: </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  {moment(job.delivery_date).format("dddd, MMMM D, YYYY")}
                </TableCell>
              </TableRow>
            )}

            {job.job_type === "Moving from Storage" ? (
              <TableRow>
                <TableCell>
                  {!job.destination.address ? "Address:" : "Moving from:"}
                </TableCell>
                <TableCell style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontWeight: 600 }} variant="body2">
                    Insight Moving Storage
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    *unit #0000
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
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
                    *
                    {job.origin.floor
                      ? job.origin.floor
                      : job.destination.floor}
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {job.job_type === "Moving with Storage" && (
              <TableRow>
                <TableCell>Storage:</TableCell>
                <TableCell style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontWeight: 600 }} variant="body2">
                    Insight Moving Storage
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    *{getDaysDiff(job.pick_up_date, job.delivery_date)} days
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {job.destination.address ? (
              <TableRow>
                <TableCell>Moving to:</TableCell>
                <TableCell style={{ display: "flex", flexDirection: "column" }}>
                  {job.destination.address},
                  <Typography style={{ fontWeight: 600 }} variant="body2">
                    {job.destination.city}, {job.destination.state},{" "}
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
              <TableCell>
                <b>{job.job_size}</b>
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
              <TableCell>
                <b>{job.crew_size} movers </b>
              </TableCell>
            </TableRow>

            {!job.is_flat_rate && (
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
            )}

            {job.job_status === "Completed" ? (
              <TableRow>
                <TableCell>Duration:</TableCell>
                <TableCell
                  children={
                    <Typography
                      variant="body1"
                      color="secondary"
                      style={{ fontWeight: 700 }}
                    >
                      {job.job_duration || ""} hours
                    </Typography>
                  }
                />
              </TableRow>
            ) : (
              !job.is_flat_rate && (
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
              )
            )}

            {job.job_status === "Completed" || job.is_flat_rate ? null : (
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
                <TableCell>
                  {job.is_flat_rate ? "FLAT PRICE" : "Estimated quote:"}
                </TableCell>
                <TableCell style={{ fontWeight: 600, fontSize: "18px" }}>
                  {!job.is_flat_rate ? (
                    <label>
                      ${job.estimated_quote[0]} - ${job.estimated_quote[1]}{" "}
                    </label>
                  ) : (
                    <label>${job.estimated_quote[0]}</label>
                  )}
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
            {job.images.length > 0 && <Divider />}
            <GridGallery images={job.images} dispatch={dispatch} />

            {job.job_status !== "Completed" && (
              <Uploader jobId={job.id} dispatch={dispatch} />
            )}
          </Box>
          <Typography
            variant="body2"
            style={{ fontSize: 12 }}
            className={classes.margTop}
          >
            Long distance moves are FLAT RATE and REQUIRED the list of all
            furniture and approximate amount of boxes.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

MovingDetails.propTypes = {
  className: PropTypes.string,
};

export default MovingDetails;
