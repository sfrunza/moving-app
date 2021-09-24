import PropTypes from "prop-types";
import { addMinutes } from "date-fns";
import merge from "lodash/merge";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  FormControl,
  Select,
  MenuItem,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { createEvent, deleteEvent, updateEvent } from "src/slices/calendar";
import { useDispatch, useSelector } from "src/store";
import { services } from "src/pages/Book/data";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import User from "src/icons/User";
import Mail from "src/icons/Mail";
import Phone from "src/icons/Phone";
import TrashIcon from "src/icons/Trash";
import X from "src/icons/X";

const useStyles = makeStyles((theme) => ({
  infoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    padding: theme.spacing(1, 2),
  },
  closeButton: {
    padding: theme.spacing(1),
  },
  label: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    display: "flex",
    color: theme.palette.text.secondary,
    alignItems: "baseline",
  },
  icon: {
    marginRight: 6,
    top: 6,
    width: 20,
    position: "relative",
    color: theme.palette.text.secondary,
  },
  phoneButton: {
    marginTop: theme.spacing(2),
  },
  iconColor: {
    color: theme.palette.text.secondary,
  },
}));

const getInitialValues = (event, range) => {
  if (event) {
    return merge(
      {},
      {
        allDay: false,
        color: "",
        description: "",
        end: addMinutes(new Date(), 30),
        start: new Date(),
        title: "",
        submit: null,
      },
      event
    );
  }

  if (range) {
    return merge(
      {},
      {
        allDay: false,
        color: "",
        description: "",
        end: new Date(range.end),
        start: new Date(range.start),
        title: "",
        submit: null,
      },
      event
    );
  }

  return {
    allDay: false,
    color: "",
    description: "",
    end: addMinutes(new Date(), 30),
    start: new Date(),
    title: "",
    submit: null,
  };
};

const AddEditEventForm = (props) => {
  const classes = useStyles();
  const {
    event,
    onAddComplete,
    onCancel,
    onDeleteComplete,
    onEditComplete,
    range,
  } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();
  const handleDelete = async () => {
    try {
      await dispatch(deleteEvent(event.id));

      if (onDeleteComplete) {
        onDeleteComplete();
      }
    } catch (err) {
      console.error(err);
    }
  };
  const duration = (name) => {
    let obj = services.filter((service) => service.name === name);
    return obj[0].time;
  };
  const price = (name) => {
    let obj = services.filter((service) => service.name === name);
    return obj[0].price;
  };

  const isCreating = !event;
  return (
    <Formik
      initialValues={getInitialValues(event, range)}
      validationSchema={Yup.object().shape({
        title: Yup.string().max(255).required("Title is required"),
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          const data = {
            start: values.start,
            title: values.title,
          };

          if (event) {
            await dispatch(updateEvent(event.id, data));
          } else {
            await dispatch(createEvent(data));
          }

          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar("Calendar updated", {
            anchorOrigin: {
              horizontal: "right",
              vertical: "top",
            },
            variant: "success",
          });

          if (isCreating && onAddComplete) {
            onAddComplete();
          }

          if (!isCreating && onEditComplete) {
            onEditComplete();
          }
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            // justifyContent="space-between"
            alignItems="center"
            className={classes.header}
          >
            {onCancel ? (
              <IconButton
                aria-label="close"
                onClick={onCancel}
                className={classes.closeButton}
              >
                <X />
              </IconButton>
            ) : null}
            <Typography variant="h6" style={{ flex: 1, textAlign: "center" }}>
              {isCreating ? "Add Appointment" : "Edit Appointment"}
            </Typography>
          </Box>
          <Divider />
          <Box p={2}>
            <label htmlFor="title" className={classes.label}>
              Service
            </label>
            <FormControl style={{ minWidth: 120 }} variant="outlined" fullWidth>
              <Select
                value={values.title}
                name="title"
                id="title"
                onChange={handleChange}
                displayEmpty
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Select service</em>;
                  }

                  return selected;
                }}
              >
                {services.map((service, i) => {
                  return (
                    <MenuItem key={i} value={service.name}>
                      {service.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          {values.title && (
            <Grid container style={{ padding: "0px 24px" }}>
              <Grid item xs={4} md={3}>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  gutterBottom
                  style={{ display: "flex" }}
                >
                  <Box mr={1}></Box>
                  {duration(values.title)} min
                </Typography>
              </Grid>
              <Grid item xs={4} md={3}>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  gutterBottom
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <AttachMoneyRoundedIcon className={classes.iconColor} />
                  {price(values.title)}
                </Typography>
              </Grid>
            </Grid>
          )}
          <Box pl={3} pr={3} pt={2}>
            <label htmlFor="start" className={classes.label}>
              Date / time
            </label>
            <TextField
              fullWidth
              variant="outlined"
              id="start"
              type="datetime-local"
              onChange={handleChange}
              name="start"
              value={values.start}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>

          {!isCreating && (
            <Box p={3}>
              <Box className={classes.infoBox}>
                <Typography variant="h6" color="textPrimary">
                  <User className={classes.icon} />
                  {event.customer.first_name + " " + event.customer.last_name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="a"
                  href={`mailto:${event.customer.email}`}
                >
                  <Mail className={classes.icon} />
                  {event.customer.email}
                </Typography>
                <Grid item xs={12} md={6}>
                  <Button
                    className={classes.phoneButton}
                    variant="outlined"
                    color="primary"
                    href={`tel:${event.customer.phone}`}
                    disableElevation
                    fullWidth
                    startIcon={<Phone />}
                  >
                    {event.customer.phone}
                  </Button>
                </Grid>
              </Box>
              {user.admin ? (
                <Box className={classes.infoBox} mt={3}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Technician
                  </Typography>
                  <Typography>
                    {event.user.first_name + " " + event.user.last_name}
                  </Typography>
                </Box>
              ) : null}
            </Box>
          )}

          <Divider />
          <Box
            style={{
              alignItems: "center",
              display: "flex",
              padding: 16,
            }}
          >
            {!isCreating && (
              <IconButton onClick={() => handleDelete()}>
                <TrashIcon fontSize="small" className={classes.iconColor} />
              </IconButton>
            )}
            <Box style={{ flexGrow: 1 }} />
            <Button
              color="primary"
              disableElevation
              disabled={isSubmitting}
              style={{ marginLeft: 8 }}
              type="submit"
              variant="contained"
            >
              Update
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

AddEditEventForm.propTypes = {
  // @ts-ignore
  event: PropTypes.object,
  onAddComplete: PropTypes.func,
  onCancel: PropTypes.func,
  onDeleteComplete: PropTypes.func,
  onEditComplete: PropTypes.func,
  // @ts-ignore
  range: PropTypes.object,
};

export default AddEditEventForm;
