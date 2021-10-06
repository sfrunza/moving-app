import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Page from "src/components/Page";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import timelinePlugin from "@fullcalendar/timeline";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import {
  Box,
  Card,
  Container,
  Dialog,
  makeStyles,
  useTheme,
  Tooltip,
} from "@material-ui/core";
import { alpha, styled, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Toolbar from "./Toolbar";
import gtm from "src/lib/gtm";
import {
  closeModal,
  getEvents,
  selectRange,
  updateEvent,
} from "src/slices/calendar";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "src/store";
import AddEditEventForm from "./AddEditEventForm";
import moment from "moment";
import { getRates } from "src/slices/rates";

const selectedEventSelector = (state) => {
  const { events, selectedEventId } = state.calendar;

  if (selectedEventId) {
    return events.find((event) => event.id === parseInt(selectedEventId));
  }

  return null;
};

const FullCalendarWrapper = styled("div")(({ theme }) => ({
  "& .fc-license-message": {
    display: "none",
  },
  "& .fc": {
    "--fc-bg-event-opacity": 1,
    "--fc-border-color": theme.palette.divider,
    "--fc-daygrid-event-dot-width": "10px",
    "--fc-event-text-color": theme.palette.text.primary,
    "--fc-list-event-hover-bg-color": theme.palette.background.level2,
    "--fc-neutral-bg-color": theme.palette.background.default,
    "--fc-page-bg-color": theme.palette.background.default,
    "--fc-today-bg-color": alpha(theme.palette.primary.main, 0.25),
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },
  "& .fc .fc-col-header-cell-cushion": {
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  "& .fc .fc-day-other .fc-daygrid-day-top": {
    color: theme.palette.text.secondary,
  },
  "& .fc-daygrid-event": {
    padding: "10px",
  },
  "& .fc-day-header": {
    ...theme.typography.subtitle2,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.level2,
  },
  "& .fc-right": {
    display: "flex",
  },
  "& .fc-unthemed td.fc-today": {
    backgroundColor: theme.palette.background.level2,
  },
  "& .fc-unthemed .fc-divider, .fc-unthemed .fc-popover .fc-header, .fc-unthemed .fc-list-heading td":
    {
      backgroundColor: theme.palette.background.level2,
    },
  "& .fc-unthemed .fc-list-empty": {
    backgroundColor: theme.palette.background.level2,
  },
  "& .fc-event": {
    fontSize: 10,
    lineHeight: 1.2,
    border: "none",
    backgroundColor: "transparent",
    color: "#000",
    "&:hover": {
      color: "#000",
    },
  },
  "& .fc-day-number": {
    float: "left !important",
  },
}));

const useStyles = makeStyles((theme) => ({
  hoverName: {
    fontWeight: 600,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  rateBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    top: 4,
    marginRight: 4,
    fontSize: 8,
    color: theme.palette.text.secondary,
  },
}));

function findRatesInDb(array, value) {
  if (!array) return null;
  for (var i = 0; i < array.length; i++) {
    if (array[i].date === value) {
      return array[i].rates;
    }
  }
}

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f7",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    // fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const Calendar = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const calendarRef = useRef(null);
  const mobileDevice = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { events, isModalOpen, selectedRange } = useSelector(
    (state) => state.calendar
  );
  const { enqueueSnackbar } = useSnackbar();
  const { rates } = useSelector((state) => state.rates);
  const selectedEvent = useSelector(selectedEventSelector);

  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(mobileDevice ? "listWeek" : "dayGridMonth");

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getRates());
  }, [dispatch]);

  const arr = [];
  events?.map((info) => {
    let date = moment(info.pick_up_date).format("MM/DD/YYYY");
    let ratesArr = findRatesInDb(rates, date);
    let customerName =
      info.customer.first_name + " " + info.customer.last_name[0] + ".";
    arr.push({
      ...info,
      title: customerName,
      start: info.pick_up_date,
      rendering: ratesArr,
    });
    return null;
  });

  // if (error.length > 0) return <div>{error}</div>;
  // if (!rates) return <div>loading...</div>;

  const handleDateToday = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleViewChange = (newView) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleDatePrev = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleDateNext = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleRangeSelect = (arg) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.unselect();
    }

    dispatch(selectRange(arg.start, arg.end));
  };

  const handleEventSelect = (arg) => {
    props.history.push(`/dashboard/jobs/${arg.event.id}`);
  };

  const handleEventResize = async ({ event }) => {
    try {
      await dispatch(
        updateEvent(event.id, {
          start: moment(event.start).format("YYYY-MM-DDTHH:mm:ss"),
          end: moment(event.end).format("YYYY-MM-DDTHH:mm:ss"),
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleEventDrop = async ({ event }) => {
    let date = moment(event.start).format("MM/DD/YYYY");
    let crewSize = event.extendedProps.crew_size;
    let estimatedTime = event.extendedProps.estimated_time;
    let ratesArr = findRatesInDb(rates, date);

    let newJobRate = parseInt(ratesArr[crewSize - 2]);

    var newEstimatedQuote = estimatedTime.map((x, i) => x * newJobRate);
    console.log(newEstimatedQuote);
    try {
      await dispatch(
        updateEvent(event.id, {
          pick_up_date: moment(event.start).format("YYYY-MM-DDTHH:mm:ss"),
          end: moment(event.start).format("YYYY-MM-DDTHH:mm:ss"),
          job_rate: newJobRate,
          estimated_quote: `{${newEstimatedQuote}}`,
        })
      );
    } catch (err) {
      console.error(err);
    }
    enqueueSnackbar("Job updated", {
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
      variant: "success",
    });
  };

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const EventDetail = ({ event, el }) => {
    let moveType = event.extendedProps.job_type;
    let status = event.extendedProps.job_status;
    let jobs = events.filter(
      (e) => e.customer.id === event.extendedProps.customer.id
    );
    let jobsNumber = jobs.length;
    let crewSize = event.extendedProps.crew_size;
    let estimatedTime = event.extendedProps.estimated_time;
    let startTime = moment(event.extendedProps.pick_up_date).format("hA");
    let symbol = "";
    let completedColor = theme.palette.primary.main;
    if (status === "Completed") {
      completedColor = theme.palette.success.main;
    } else if (status === "Needs Attention") {
      completedColor = theme.palette.warning.main;
    } else if (status === "Canceled") {
      completedColor = theme.palette.error.main;
    }
    function image() {
      return (
        <img
          src="https://freeiconshop.com/wp-content/uploads/edd/box-outline-filled.png"
          alt="box"
          style={{ width: 10 }}
        />
      );
    }
    if (moveType === "Unloading Help") {
      symbol = "U";
    } else if (moveType === "Loading Help") {
      symbol = "L";
    } else if (moveType === "Inside Move") {
      symbol = "I";
    } else if (moveType === "Moving with Storage") {
      symbol = "\u2192 ]";
    } else if (moveType === "Packing Only") {
      symbol = "P";
    } else if (moveType === "Moving from Storage") {
      symbol = "[ \u2192";
    }
    // extendedProps is used to access additional event properties.
    const content = (
      <Box display="flex" alignItems="center" className="fc-title">
        <Box style={{ width: 35 }}>{startTime}</Box>

        <Box
          style={{ color: `${completedColor}` }}
          className={classes.hoverName}
        >
          {event.title}
        </Box>

        {jobsNumber > 1 ? (
          <span
            style={{
              fontSize: 8,
              position: "relative",
              fontWeight: 600,
              bottom: 5,
              color: "#00F",
            }}
          >
            {jobsNumber}
          </span>
        ) : null}
        <Box flexGrow={1} />
        <Box style={{ marginRight: "5px", display: "flex" }}>
          {symbol === "P" ? image() : symbol}
        </Box>
        <StyledTooltip
          title={
            <Box>
              <p>{event.extendedProps.job_size}</p>
              <b>
                {estimatedTime[0]}
                {estimatedTime[1] ? " - " + estimatedTime[1] : null} hr
              </b>
            </Box>
          }
          placement="top-start"
        >
          <Box>
            {crewSize}/{Math.floor(estimatedTime[0])}
          </Box>
        </StyledTooltip>
      </Box>
    );
    ReactDOM.render(content, el);
    return el;
  };

  const HeaderDetail = ({ date, el, view }) => {
    let formatedDate = moment(date).format("MM/DD/YYYY");
    let theRates = findRatesInDb(rates, formatedDate);
    if (!theRates) return null;

    let selectBackgroundColor = "transparent";

    if (theRates[0] === "120") {
      selectBackgroundColor = "rgb(0 186 93 / 25%)";
    }
    if (theRates[0] === "160") {
      selectBackgroundColor = "rgba(253 201 9 / 25%)";
    }
    if (theRates[0] === "200") {
      selectBackgroundColor = "rgba(251 0 9 / 25%)";
    }

    const style = {
      backgroundColor: selectBackgroundColor,
      padding: "0px 2px",
    };

    // extendedProps is used to access additional event properties.
    const content = (
      <Box className={classes.rateBox}>
        <Box style={style}>
          {theRates[0]}/{theRates[1]}/{theRates[2]}
        </Box>
      </Box>
    );
    ReactDOM.render(content, el);
    return el;
  };

  return (
    <Page title="Calendar" style={{ minWidth: 1400 }}>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          paddingY: 8,
        }}
      >
        <Container maxWidth={false}>
          {/* <Grid container justifyContent="space-between" spacing={3}>
            <Grid item>
              <Typography color="textPrimary" variant="h5">
                Here&apos;s all your appointments
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                style={{ marginTop: 8 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Typography color="textSecondary" variant="subtitle2">
                  Calendar
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item>
              <Box m={-1}>
                <Button
                  color="primary"
                  disabled
                  disableElevation
                  onClick={handleAddClick}
                  startIcon={<PlusIcon fontSize="small" />}
                  style={{ margin: 8 }}
                  variant="contained"
                >
                  New Appointment
                </Button>
              </Box>
            </Grid>
          </Grid> */}
          <Box mt={3}>
            <Toolbar
              date={date}
              onDateNext={handleDateNext}
              onDatePrev={handleDatePrev}
              onDateToday={handleDateToday}
              onViewChange={handleViewChange}
              view={view}
            />
          </Box>
          <Card
            style={{
              marginTop: 24,
              padding: 16,
              boxShadow: theme.shadows[1],
            }}
          >
            <FullCalendarWrapper>
              <FullCalendar
                allDayMaintainDuration
                dayMaxEventRows={3}
                droppable
                // timeZone='ETD'
                dayRender={HeaderDetail}
                editable
                eventClick={handleEventSelect}
                eventDisplay="block"
                eventDrop={handleEventDrop}
                eventResizableFromStart
                eventResize={handleEventResize}
                events={arr}
                eventRender={EventDetail}
                header={false}
                height={800}
                initialDate={date}
                // initialView={view}
                plugins={[
                  dayGridPlugin,
                  interactionPlugin,
                  listPlugin,
                  timeGridPlugin,
                  timelinePlugin,
                ]}
                ref={calendarRef}
                rerenderDelay={10}
                select={handleRangeSelect}
                // selectable
                weekends
              />
            </FullCalendarWrapper>
          </Card>
          <Dialog
            fullWidth
            maxWidth="xs"
            onClose={handleModalClose}
            open={isModalOpen}
          >
            {/* Dialog renders its body even if not open */}
            {isModalOpen && (
              <AddEditEventForm
                event={selectedEvent}
                onAddComplete={handleModalClose}
                onCancel={handleModalClose}
                onDeleteComplete={handleModalClose}
                onEditComplete={handleModalClose}
                range={selectedRange}
              />
            )}
          </Dialog>
        </Container>
      </Box>
    </Page>
  );
};

export default Calendar;
