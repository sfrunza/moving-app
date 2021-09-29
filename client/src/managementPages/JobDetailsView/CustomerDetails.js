import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Box,
  Avatar,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  IconButton,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import Phone from "src/icons/Phone";
import Mail from "src/icons/Mail";
import StatusLabel from "../../components/StatusLabel";
import { useDispatch } from "src/store";
import { updateEvent } from "src/slices/calendar";
import CompleteForm from "./CompleteForm";
import X from "src/icons/X";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
    "& .MuiTableCell-root": {
      borderBottom: "none",
    },
  },
  name: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    "&:hover": {
      textDecoration: "none",
    },
  },
  infoField: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

const statusOptions = ["Needs Attention", "Confirmed", "Canceled", "Completed"];

function PaperComponent(props) {
  return <Paper {...props} />;
}

function CustomerDetails({ customer, job, className, users, init, ...rest }) {
  const classes = useStyles();
  const [status, setStatus] = useState(job.job_status);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    event.currentTarget.blur();
    if (event.target.value === "Completed") {
      setOpen(true);
    } else {
      setStatus(event.target.value);
    }
  };

  const handleStatusUpdate = async (values) => {
    let userIdsArray = [];

    if (values.user_ids) {
      values.user_ids.map((user) => {
        userIdsArray.push(user.id);
        return null;
      });
      values.user_ids = userIdsArray;
    }

    try {
      await dispatch(
        updateEvent(job.id, {
          ...values,
        })
      );
      enqueueSnackbar("Status Changed", {
        variant: "success",
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        style={{ textAlign: "center" }}
        title={<StatusLabel status={job.job_status} />}
      />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody style={{ display: "flex", flexDirection: "column" }}>
            <TableRow>
              <TableCell className={classes.infoField}>
                <Avatar
                  style={{ height: "60px", width: "60px", marginBottom: 8 }}
                />
                <Typography
                  component={RouterLink}
                  color="textPrimary"
                  to={`/dashboard/customers/${customer.id}`}
                  className={classes.name}
                >
                  {customer.first_name} {customer.last_name}
                </Typography>
                <Button
                  color="default"
                  component="a"
                  href={`tel:${customer.phone}`}
                  className={classes.button}
                  fullWidth
                  startIcon={<Phone />}
                >
                  {customer.phone}
                </Button>
                {customer.add_phone ? (
                  <Button
                    color="default"
                    component="a"
                    href={`tel:${customer.add_phone}`}
                    className={classes.button}
                    fullWidth
                    startIcon={<Phone />}
                  >
                    {customer.add_phone}
                  </Button>
                ) : null}
                <Button
                  color="default"
                  component="a"
                  href={`mailto:${customer.email}`}
                  className={classes.button}
                  fullWidth
                  startIcon={<Mail />}
                >
                  {customer.email}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box
          justifyContent="space-between"
          display="flex"
          flexDirection="column"
          alignItems="center"
          minHeight="100px"
        >
          <Typography variant="caption">Change Status</Typography>
          <TextField
            // fullWidth
            name="option"
            onChange={handleChange}
            select
            // eslint-disable-next-line react/jsx-sort-props
            SelectProps={{ native: true }}
            value={status}
            variant="outlined"
            size="small"
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
          <Button
            variant="contained"
            size="small"
            disableElevation
            color="primary"
            onClick={() => handleStatusUpdate({ job_status: status })}
            disabled={job.job_status === status ? true : false}
          >
            Update
          </Button>
        </Box>
      </CardContent>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        // disableBackdropClick
      >
        <DialogTitle
          id="form-dialog-title"
          classes={{ root: classes.dialogTitle }}
        >
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={() => handleClose()}
          >
            <X />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <CompleteForm
            onClose={handleClose}
            handleStatusUpdate={handleStatusUpdate}
            setStatus={setStatus}
            handleClose={handleClose}
            init={init}
            users={users}
          />
        </DialogContent>
      </Dialog>
    </Card>
  );
}

CustomerDetails.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired,
};

export default CustomerDetails;
