import React, {
  useCallback,
  useState,
  useRef,
  useEffect
} from 'react';
import ReactDOM from "react-dom";
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import {
  Box,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import Header from './Header';
import Toolbar from './Toolbar';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    minWidth :'1400px',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  calendar: {
    '& .fc-unthemed th': {
      borderColor: theme.palette.divider
    },
    '& .fc-unthemed td': {
      borderColor: theme.palette.divider
    },
    '& .fc-unthemed td.fc-today': {
      backgroundColor: deepOrange[50]
    },
    '& .fc-head': {
      backgroundColor: theme.palette.background.dark
    },
    '& .fc-body': {
      backgroundColor: theme.palette.background.default,
    },
    '& .fc-axis': {
      ...theme.typography.body2
    },
    '& .fc-list-item-time': {
      ...theme.typography.body2
    },
    '& .fc-list-item-title': {
      ...theme.typography.body1
    },
    '& .fc-list-heading-main': {
      ...theme.typography.h6
    },
    '& .fc-list-heading-alt': {
      ...theme.typography.h6
    },
    '& .fc th': {
      borderColor: theme.palette.divider
    },
    '& .fc-day-header': {
      ...theme.typography.subtitle2,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.dark
    },
    '& .fc-day-top': {
      ...theme.typography.body2
    },
    '& .fc-highlight': {
      backgroundColor: theme.palette.background.dark
    },
    '& .fc-event:hover': {
      color: '#275827',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    '& .fc-event': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.contrastText,
      border: 'none',
      opacity: 0.9,
      '& .fc-time': {
        ...theme.typography.h6,
        color: 'inherit'
      },
      '& .fc-title': {
        ...theme.typography.body3,
        color: green[700],
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px'
      }
    },
    '& .fc-list-empty': {
      ...theme.typography.subtitle1
    },
    '& tbody .fc-row': {
      height: 'auto !important',
      minHeight: '128px !important'
    },
    '& .fc-day-number': {
      float: 'left !important'
    }
  }
}));


function CalendarView({history}) {
  const classes = useStyles();
  const calendarRef = useRef(null);
  const isMountedRef = useIsMountedRef();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const [view, setView] = useState(mobileDevice ? 'listWeek' : 'dayGridMonth');
  const [date, setDate] = useState(moment().toDate());
  const [events, setEvents] = useState(null);
  const [job, setJob] = useState()

  function zoomOutMobile() {
      var viewport = document.querySelector('meta[name="viewport"]');

      if ( viewport ) {
        viewport.content = "initial-scale=1";
        viewport.content = "width=500";
      }
    }

  const EventDetail = ({ event, el }) => {
    let moveType = event.extendedProps.description
    let status = event.extendedProps.status
    let symbol = "";
    let completedColor = '';
    if (status === "Completed") {
      completedColor = "#5800ff"
    } else if (status === "Needs Attention") {
      completedColor = 'orange'
    } else if (status === "Canceled") {
      completedColor = 'red'
    }
    function image(){
      return (
        <img  src="https://freeiconshop.com/wp-content/uploads/edd/box-outline-filled.png" style={{width: '13px'}}/>
      )
    }
    if (moveType === "Unloading Help") {
      symbol = "U"
    } else if (moveType === "Loading Help") {
      symbol = "L"
    } else if (moveType === "Inside Move") {
      symbol = "I"
    } else if (moveType === "Moving with Storage") {
      symbol = '\u2192 ]'
    } else if (moveType === "Packing Only") {
      symbol = "P"
    }
      // extendedProps is used to access additional event properties.
      const content = (
        <div className="fc-title" style={{ color: `${completedColor}` }}>
          <div>{event.title}</div>
          <div style={{display: 'flex', alignItems: 'center'}}>{(symbol === "P") ? image() : symbol}</div>
          <div>4/2</div>
        </div>
      );
      ReactDOM.render(content, el);
      return el;
    };

  const handleDateToday = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.today();
      setDate(calendarApi.getDate());
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

  const handleEventSelect = (arg) => {
    history.push(`/app/management/jobs/${arg.event.id}`);
  };

  const getEvents = useCallback(() => {
    axios
      .get('/api/v1/jobs.json')
      .then((response) => {
        let data = response.data;
        let arr = []
        let title = "";
        let description = "";
        let date = [];
        data.map((info) => {
          setJob(info)
          title = info.customer.first_name + " " + info.customer.last_name
          description = info.status
          date = moment(info.pick_up_date).format('YYYY-MM-DD')
          return arr.push({ "id":info.id, "title": title, "date": date, "description": info.move_type, "status": info.status, 'customRender': true})
        })

        if (isMountedRef.current) {
          setEvents(arr);
        }

      });
  }, [isMountedRef]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  if (!events) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Calendar"
    >

      <Container maxWidth={false}>
        <Toolbar
          date={date}
          onDateNext={handleDateNext}
          onDatePrev={handleDatePrev}
          onDateToday={handleDateToday}
          view=""
        />
        <Paper
          className={classes.calendar}
          component={Box}
          mt={3}
          p={2}
        >
          <FullCalendar
            allDayMaintainDuration
            defaultDate={date}
            droppable
            eventClick={handleEventSelect}
            eventLimit={7}
            eventResizableFromStart
            events={events}
            eventRender={EventDetail}
            header={false}
            height={800}
            ref={calendarRef}
            rerenderDelay={10}
            selectable
            weekends
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              timelinePlugin
            ]}
            fixedWeekCount={false}
            contentHeight='auto'
          />
        </Paper>
      </Container>
    </Page>
  );
}

export default CalendarView;