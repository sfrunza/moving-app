import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";
import ArrowRight from "src/icons/ArrowRight";
import ChevronDown from "src/icons/ChevronDown";
import ChevronUp from "src/icons/ChevronUp";
import { getEvents } from "src/slices/calendar";
import { useDispatch, useSelector } from "src/store";
import { useEffect } from "react";

const Analytics = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.calendar);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const net = events.filter((event) => event.job_status === "Completed");

  const sum = () => {
    let total = 0;
    net.map((item) => {
      total = total + item.total_amount;
    });
    return total;
  };
  return (
    <Grid container spacing={2}>
      <Grid item md={3} sm={6} xs={12}>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              p: 3,
            }}
          >
            <div>
              <Typography color="textPrimary" variant="subtitle2">
                Jobs Completed
              </Typography>
              <Typography
                color="textPrimary"
                style={{ marginTop: 8 }}
                variant="h5"
              >
                {net.length}
              </Typography>
            </div>
          </Box>
          <Divider />
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Button
              color="primary"
              endIcon={<ArrowRight fontSize="small" />}
              variant="text"
            >
              See all jobs
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              p: 3,
            }}
          >
            <div>
              <Typography color="textPrimary" variant="subtitle2">
                Net
              </Typography>
              <Typography
                color="textPrimary"
                style={{ marginTop: 8 }}
                variant="h5"
              >
                ${sum()}
              </Typography>
            </div>
          </Box>
          <Divider />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              px: 3,
              py: 2,
            }}
          >
            <Avatar
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.success.main, 0.08),
                color: "success.main",
                height: 36,
                width: 36,
              }}
            >
              <ChevronUp fontSize="small" />
            </Avatar>
            <Typography
              color="textSecondary"
              style={{ marginLeft: 8 }}
              variant="caption"
            >
              12% more then last month
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              p: 3,
            }}
          >
            <div>
              <Typography color="textPrimary" variant="subtitle2">
                Engagements
              </Typography>
              <Typography
                color="textPrimary"
                style={{ marginTop: 8 }}
                variant="h5"
              >
                36,6K
              </Typography>
            </div>
          </Box>
          <Divider />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              px: 3,
              py: 2,
            }}
          >
            <Avatar
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.error.main, 0.08),
                color: "error.main",
                height: 36,
                width: 36,
              }}
            >
              <ChevronDown fontSize="small" />
            </Avatar>
            <Typography
              color="textSecondary"
              style={{ marginLeft: 8 }}
              variant="caption"
            >
              30% less then last month
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              p: 3,
            }}
          >
            <div>
              <Typography color="textPrimary" variant="subtitle2">
                Conversions
              </Typography>
              <Typography
                color="textPrimary"
                style={{ marginTop: 8 }}
                variant="h5"
              >
                131,3K
              </Typography>
            </div>
          </Box>
          <Divider />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              px: 3,
              py: 2,
            }}
          >
            <Avatar
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.success.main, 0.08),
                color: "success.main",
                height: 36,
                width: 36,
              }}
            >
              <ChevronUp fontSize="small" />
            </Avatar>
            <Typography
              color="textSecondary"
              style={{ marginLeft: 8 }}
              variant="caption"
            >
              12% more then last month
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Analytics;
