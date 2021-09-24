import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Grid, makeStyles } from "@material-ui/core";
import CustomerInfo from "./CustomerInfo";
import OtherActions from "./OtherActions";
import GeneralSettings from "./GeneralSettings";
import { updateCustomer } from "src/slices/customers";
import { useSelector, useDispatch } from "src/store";

const useStyles = makeStyles(() => ({
  root: {},
}));

function Details({ customer, className, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { isUpdating } = useSelector((state) => state.customers);

  const handleUpdate = (id, updatedUser) => {
    dispatch(updateCustomer(id, updatedUser));
  };

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      <Grid item md={4} xl={3} xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CustomerInfo customer={customer} />
          </Grid>
          <Grid item xs={12}>
            <OtherActions />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8} xl={9} xs={12}>
        <GeneralSettings
          user={customer}
          handleUpdate={handleUpdate}
          isUpdating={isUpdating}
        />
      </Grid>
    </Grid>
  );
}

Details.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired,
};

export default Details;
