import React, { useEffect, useState } from "react";
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
import { useJsApiLoader } from "@react-google-maps/api";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
import Uploader from "./Uploader";
import GridGallery from "./GridGallery";
import EditMainContainer from "./EditMainContainer";
import ServiceChange from "./components/ServiceChange";
import EditMoveSize from "./components/EditMoveSize";
import EditCrewSize from "./components/EditCrewSize";
import EditAddress from "./components/EditAddress";
import EditAdditionalInfo from "./components/EditAdditionalInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    // boxShadow: "none",
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
  crewNames: {
    color: theme.palette.text.secondary,
  },
  editIcon: {
    color: theme.palette.primary.main,
  },
}));

function MovingDetails({
  job,
  dispatch,
  setFormState,
  formState,
  recalc,
  setRecalc,
  saveAndUpdate,
  setSaveAndUpdate,
  rates,
  ...rest
}) {
  const classes = useStyles();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ",
  });
  const [distance, setDistance] = useState(null);
  const google = (window.google = window.google ? window.google : {});

  const [map, setMap] = useState(null);

  const searchRate = (selectedDay, data) => {
    let dateFormat = moment(selectedDay).format("MM/DD/YYYY");
    for (var i = 0; i < data.length; i++) {
      let renderedDay = data[i].date;
      if (renderedDay && renderedDay === dateFormat) {
        return data[i].rates;
      }
    }
  };

  function roundToHalf(value) {
    var converted = parseFloat(value); // Make sure we have a number
    var decimal = converted - parseInt(converted, 10);
    decimal = Math.round(decimal * 10);
    if (decimal === 5) {
      return parseInt(converted, 10) + 0.5;
    }
    if (decimal < 3 || decimal > 7) {
      return Math.round(converted);
    } else {
      return parseInt(converted, 10) + 0.5;
    }
  }

  const getDaysDiff = (start_date, end_date, date_format = "YYYY-MM-DD") => {
    const getDateAsArray = (date) => {
      return moment(date.split(/\D+/), date_format);
    };
    return getDateAsArray(end_date).diff(getDateAsArray(start_date), "days");
  };

  const changeEstimate = (crewSize) => {
    var estimate = formState.estimated_time;
    console.log("formState Estimate---->", estimate);
    let crew = formState.crew_size;
    let diff = crew - crewSize;
    // console.log("NEW ESTIMATE---->", estimate);
    // console.log("Round---->", roundToHalf(2.8));
    console.log(Math.sign(diff));
    if (Math.sign(diff) < 0) {
      if (Math.abs(diff) === 1) {
        let zero = estimate[0] - roundToHalf(estimate[0] * 0.15);
        let one = zero + 1;
        estimate = [zero, one];
      } else if (Math.abs(diff) === 2) {
        let zero = estimate[0] - roundToHalf(estimate[0] * 0.3);
        let one = zero + 1;
        estimate = [zero, one];
      }
    }
    if (Math.sign(diff) > 0) {
      if (Math.abs(diff) === 1) {
        let zero = estimate[0] + roundToHalf(estimate[0] * 0.15);
        let one = zero + 1;
        estimate = [zero, one];
      } else if (Math.abs(diff) === 2) {
        let zero = estimate[0] + roundToHalf(estimate[0] * 0.3);
        let one = zero + 1;
        estimate = [zero, one];
      }
    }
    console.log("NEW ESTIMATE---->", estimate);
    return estimate;
  };

  const changeQuote = (rate, estTime) => {
    let quote = [rate * estTime[0], rate * estTime[1]];
    return quote;
  };

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
              width: `97%`,
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
      <CardHeader title="Move Overview" />
      {isLoaded && map}
      <CardContent className={classes.content}>
        <Box className={classes.headerDistance}>{distance}</Box>
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
              <TableCell>
                <EditMainContainer>
                  {/* <DateChange
                    // value={job.pick_up_date}
                    onChange={(date) => {
                      setFormState({
                        ...formState,
                        pick_up_date: moment(date).format(
                          `YYYY-MM-DDT${moment(formState.pick_up_date).format(
                            "hh:mm:ss"
                          )}`
                        ),
                        // job_rate: parseInt(searchRate(date, rates)[crew - 2]),
                      });
                    }}
                  /> */}
                </EditMainContainer>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Start time:</TableCell>
              <TableCell style={{ fontWeight: 700 }}>
                {moment(job.pick_up_date).format("h A")}
              </TableCell>
            </TableRow>
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
                <TableCell>
                  <EditMainContainer>
                    <EditAddress
                      job={job}
                      formState={formState}
                      setFormState={setFormState}
                    />
                  </EditMainContainer>
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
                <TableCell>
                  <EditMainContainer>
                    {/* <EditAddress
                      // value={formState.job_type}
                      // onChange={(e) => {
                      //   setFormState({
                      //     ...formState,
                      //     job_type: e.target.value,
                      //   });
                      // }}
                    /> */}
                  </EditMainContainer>
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
              <TableCell style={{ padding: "0px" }}>
                <Divider />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Service:</TableCell>
              <TableCell>{job.job_type}</TableCell>
              <TableCell>
                <EditMainContainer>
                  <ServiceChange
                    value={formState.job_type}
                    onChange={(e) => {
                      setFormState({
                        ...formState,
                        job_type: e.target.value,
                      });
                    }}
                  />
                </EditMainContainer>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Move size:</TableCell>
              <TableCell style={{ fontWeight: 700 }}>{job.job_size}</TableCell>
              <TableCell>
                <EditMainContainer>
                  <EditMoveSize
                    value={formState.job_size}
                    onChange={(e) => {
                      setRecalc(false);
                      setSaveAndUpdate(true);
                      setFormState({
                        ...formState,
                        job_size: e.target.value,
                      });
                    }}
                  />
                </EditMainContainer>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ padding: "0px" }}>
                <Divider />
              </TableCell>
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
              <TableCell>
                <EditMainContainer>
                  <EditCrewSize
                    value={formState.crew_size}
                    onChange={(e) => {
                      setRecalc(true);
                      let date = formState.pick_up_date;
                      setFormState({
                        ...formState,
                        crew_size: e.target.value,
                        job_rate: parseInt(
                          searchRate(date, rates)[e.target.value - 2]
                        ),
                        estimated_time: changeEstimate(e.target.value),
                        estimated_quote: changeQuote(
                          parseInt(searchRate(date, rates)[e.target.value - 2]),
                          changeEstimate(e.target.value)
                        ),
                      });
                    }}
                  />
                </EditMainContainer>
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
            {job.job_status === "Completed" && (
              <TableRow>
                <TableCell>Crew:</TableCell>
                <TableCell>
                  {job.users.map((user, i) => {
                    return (
                      <label key={i} className={classes.crewNames}>
                        {user.first_name + " " + user.last_name}
                        {i === job.users.length - 1 ? null : ", "}
                      </label>
                    );
                  })}
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
            <EditMainContainer>
              <EditAdditionalInfo />
            </EditMainContainer>
          </Box>
        </Box>
        <Box className={classes.addInfoContainer}>
          <Box mt={2} className={classes.addInfoSubTitle}>
            <Typography variant="body2" color="textPrimary">
              {job.additional_info}
            </Typography>

            {job.images.length > 0 && <Divider />}
            <GridGallery images={job.images} dispatch={dispatch} />
            {/* {job.job_status === "Completed" ? null : (
              <Uploader
                jobId={job.id}
                images={images}
                setImages={setImages}
                text="Add photo to inventory"
              />
            )} */}
            <Uploader jobId={job.id} dispatch={dispatch} />
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
