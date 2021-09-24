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
} from "@material-ui/core";
// import { useSnackbar } from "notistack";
import Phone from "src/icons/Phone";
import Mail from "src/icons/Mail";
import StatusLabel from "../../components/StatusLabel";
import { useDispatch } from "src/store";
import { updateEvent } from "src/slices/calendar";

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
}));

const statusOptions = ["Needs Attention", "Confirmed", "Canceled", "Completed"];

function CustomerDetails({ user, job, className, ...rest }) {
  const [status, setStatus] = useState(job.job_status);
  // const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const classes = useStyles();
  const handleChange = (event) => {
    event.persist();
    setStatus(event.target.value);
    // handleStatusUpdate(event.target.value);
  };

  const handleStatusUpdate = async (status) => {
    try {
      await dispatch(
        updateEvent(job.id, {
          job_status: status,
        })
      );
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
                  to={`/dashboard/customers/${user.id}`}
                  className={classes.name}
                >
                  {user.first_name} {user.last_name}
                </Typography>
                <Button
                  color="default"
                  component="a"
                  href={`tel:${user.phone}`}
                  className={classes.button}
                  fullWidth
                  startIcon={<Phone />}
                >
                  {user.phone}
                </Button>
                {user.add_phone ? (
                  <Button
                    color="default"
                    component="a"
                    href={`tel:${user.add_phone}`}
                    className={classes.button}
                    fullWidth
                    startIcon={<Phone />}
                  >
                    {user.add_phone}
                  </Button>
                ) : null}
                <Button
                  color="default"
                  component="a"
                  href={`mailto:${user.email}`}
                  className={classes.button}
                  fullWidth
                  startIcon={<Mail />}
                >
                  {user.email}
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
            onClick={() => handleStatusUpdate(status)}
            disabled={job.job_status === status ? true : false}
          >
            Update
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

CustomerDetails.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired,
};

export default CustomerDetails;
