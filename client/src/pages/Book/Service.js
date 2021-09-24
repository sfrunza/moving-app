import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  CardContent,
  Card,
  Box,
  useTheme,
  Collapse,
  CardActions,
  IconButton,
  Tooltip,
} from "@material-ui/core";
// import {
//   setTitle,
//   setDuration,
//   setPrice,
//   setDetails,
// } from "src/slices/booking";
import { useDispatch } from "src/store";
import { handleNext } from "src/slices/booking";
import { ClockIcon } from "src/components/dayTimePicker/Icons";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
    transition: "transform 250ms ease, box-shadow 250ms ease",

    "&:hover": {
      transform: "translateY(-0.25rem)",
      boxShadow: theme.shadows[2],
    },
  },
  content: {
    padding: theme.spacing(2, 2, 0),
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
  },
  flex: {
    flex: 0.5,
  },
  iconMargin: {
    marginRight: theme.spacing(1),
  },
}));

export default function Service({ service, category }) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onSelect = () => {
    dispatch(handleNext());
    // dispatch(setTitle(service.name));
    // dispatch(setDuration(service.time));
    // dispatch(setPrice(service.price));
    // dispatch(setDetails(service.details));

    window.scrollTo(0, 0);
  };

  return (
    <Card className={classes.root}>
      <CardContent classes={{ root: classes.content }}>
        <Box justifyContent="space-between" display="flex">
          <Typography component="h5" variant="h5">
            {service.name}
          </Typography>
          <Button
            aria-label="play/pause"
            variant={theme.palette.type === "dark" ? "contained" : "outlined"}
            color="primary"
            onClick={onSelect}
          >
            Select
          </Button>
        </Box>
        {category === "all" ? (
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.iconText}
          >
            {service.category}
          </Typography>
        ) : null}
        <Box display="flex" flexDirection="row">
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={clsx(classes.iconText, classes.flex)}
          >
            <ClockIcon className={classes.iconMargin} />
            {service.time} minutes
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.iconText}
          >
            <AttachMoneyRoundedIcon className={classes.iconMargin} />
            {service.price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Details">
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="textSecondary">
            {service.details}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
