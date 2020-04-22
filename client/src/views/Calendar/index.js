import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Card,
  CardContent,
  colors,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';



const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    '& .fc-unthemed td': {
      borderColor: theme.palette.divider
    },
    '& .fc-widget-header': {
      backgroundColor: colors.grey[50]
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
      fontWeight: 500,
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),
      backgroundColor: colors.grey[50]
    },
    '& .fc-day-top': {
      ...theme.typography.body2
    },
    '& .fc-highlight': {
      backgroundColor: colors.blueGrey[50]
    },
    '& .fc-event:hover': {
      color: '#275827',
      textDecoration: 'underline'
    },
    '& .fc-event': {
      backgroundColor: '#39ff150d',
      color: theme.palette.primary.contrastText,
      border: 'none',
      margin: '5px 2px',
      opacity: 0.9,
      '& .fc-time': {
        ...theme.typography.h6,
        color: 'inherit'
      },
      '& .fc-title': {
        ...theme.typography.body1,
        color: '#275827'
      },
    },
    '& .fc-list-empty': {
      ...theme.typography.subtitle1
    }
  },
  card: {
    marginTop: theme.spacing(3)
  }
}));

function Calendar() {
  const classes = useStyles();
  const calendarRef = useRef(null);
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const [view, setView] = useState(mobileDevice ? 'listWeek' : 'dayGridMonth');
  const [date, setDate] = useState(moment().toDate());
  const [jobs, setJobs] = useState();

  const handleDateToday = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.today();
    setDate(calendarApi.getDate());
  };

  const handleViewChange = (newView) => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.changeView(newView);
    setView(newView);
  };

  const handleDatePrev = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.prev();
    setDate(calendarApi.getDate());
  };

  const handleDateNext = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.next();
    setDate(calendarApi.getDate());
  };

  useEffect(() => {
    let mounted = true;

    const fetchEvents = () => {
      if (mounted) {
        axios
          .get('http://localhost:3001/api/v1/jobs.json')
          .then((response) => {
            let data = response.data;
            let arr = []
            let title = "";
            let date = [];
            data.map((info) => {
              if(info.customer === null) {
                info.customer = " "
              }
                else {
                  title = info.customer.first_name + " " + info.customer.last_name
                  date = moment(info.pick_up_date).format('YYYY-MM-DD')
                  arr.push({"url": `/admin/jobs/${info.id}`, "title": title, "date": date})

              }
            })
            setJobs(arr);
        })
      }
    };
    fetchEvents();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();
    const newView = mobileDevice ? 'listWeek' : 'dayGridMonth';

    calendarApi.changeView(newView);
    setView(newView);
  }, [mobileDevice]);

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
          onViewChange={handleViewChange}
          view={view}
        />
        <Card className={classes.card}>
          <CardContent>
            <FullCalendar
              allDayMaintainDuration
              defaultDate={date}
              defaultView={view}
              droppable
              editable
              eventResizableFromStart
              events={jobs}
              header={false}
              height={800}
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
                timelinePlugin
              ]}
              ref={calendarRef}
              rerenderDelay={10}
              selectable
              weekends
              fixedWeekCount={false}
            />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );

}

export default Calendar;
