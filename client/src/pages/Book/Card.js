import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  Card as CardMU,
  useTheme,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { setUser } from "src/slices/booking";
import { useDispatch } from "src/store";
import { handleNext } from "src/slices/booking";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 195,
    display: "flex",
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
    transition: "transform 250ms ease, box-shadow 250ms ease",

    "&:hover": {
      transform: "translateY(-0.25rem)",
      boxShadow: theme.shadows[2],
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 165,
    backgroundSize: "cover",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function Card({ user }) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const onSelect = () => {
    dispatch(handleNext());
    dispatch(setUser(user));
    window.scrollTo(0, 0);
  };

  return (
    <CardMU className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {user?.first_name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {user.role || "Nail Technician"}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button
            aria-label="play/pause"
            variant={theme.palette.type === "dark" ? "contained" : "outlined"}
            color="primary"
            onClick={onSelect}
          >
            Select
          </Button>
          <div style={{ flex: 1 }} />
          <Tooltip title="Instagram">
            <IconButton>
              <InstagramIcon fontSize="medium" className={classes.iconColor} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        title="Live from space album cover"
        image={
          user.avatar?.url ||
          "http://images.assetsdelivery.com/compings_v2/apoev/apoev1806/apoev180600082.jpg"
        }
      />
    </CardMU>
  );
}
