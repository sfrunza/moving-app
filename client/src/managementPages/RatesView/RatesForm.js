import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import {
  Grid,
  FormControl,
  FormHelperText,
  Box,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import CalendarWithRates from "src/components/CalendarWithRates";
import { useDispatch } from "src/store";
import { saveRate } from "src/slices/rates";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[1],
  },
  select: {
    marginTop: theme.spacing(3),
    justifyContent: "center",
  },
  buttonsContainer: {
    marginTop: theme.spacing(5),
    width: "100%",
    maxWidth: 310,
    margin: "auto",
    padding: 0,
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 310,
    margin: "auto",
  },
}));

const rateOptions = [
  { text: "Regular", rate: "120, 140, 160", value: "{120,140,160}" },
  { text: "SubPick", rate: "160, 180, 200", value: "{160,180,200}" },
  { text: "Pick", rate: "200, 220, 240", value: "{200,220,240}" },
];

const validate = (values) => {
  const errors = {};

  if (!values.date) {
    errors.date = "Required";
  }

  if (values.rates === "") {
    errors.rates = "Required";
  }

  return errors;
};

const CustomButton = ({ selected, text, rate, ...rest }) => {
  return (
    <Box>
      <Button
        variant={selected ? "contained" : "outlined"}
        color={
          text === "Regular"
            ? "primary"
            : text === "SubPick"
            ? "inherit"
            : "secondary"
        }
        disableElevation
        size="small"
        fullWidth
        {...rest}
      >
        {text}
      </Button>
      <Typography variant="body2" color="textSecondary">
        {" "}
        {rate}
      </Typography>
    </Box>
  );
};

const RatesForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  // const saveRate = async (data) => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   };
  //   await fetch("/api/v1/rates", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  // initiate formik
  const formik = useFormik({
    initialValues: {
      date: null,
      rates: "",
    },
    validateOnMount: true,
    enableReinitialize: false,
    validate: (values) => validate(values),
    onSubmit: (values) => {
      dispatch(saveRate(values));
    },
  });

  return (
    <Card classes={{ root: classes.root }}>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <Grid container classes={{ root: classes.select }} spacing={2}>
            <Grid item xs={12}>
              <CalendarWithRates
                inputVariant="outlined"
                id="date"
                name="date"
                format="MM/DD/YYYY"
                size="small"
                orientation="portrait"
                variant="static"
                disableToolbar
                autoOk
                // maxDate={new Date().setMonth(new Date().getMonth() + 3)}
                disablePast
                fullWidth
                value={formik.values.date}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                onChange={(date) => {
                  formik.setFieldValue(
                    "date",
                    moment(date).format("MM/DD/YYYY")
                  );
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                size="small"
                placeholder="Select"
                fullWidth
                error={formik.touched.rates && Boolean(formik.errors.rates)}
              >
                <div className={classes.buttonDiv}>
                  {rateOptions.map((item, index) => {
                    return (
                      <CustomButton
                        key={index}
                        value={item.value}
                        onClick={() => {
                          formik.setFieldValue("rates", item.value);
                        }}
                        selected={
                          item.value === formik.values.rates ? true : false
                        }
                        text={item.text}
                        rate={item.rate}
                      />
                    );
                  })}
                </div>
                {formik.touched.rates && Boolean(formik.errors.rates) ? (
                  <FormHelperText>{formik.errors.rates}</FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
            <Grid item xs={12} classes={{ root: classes.buttonsContainer }}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disableElevation
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default RatesForm;
