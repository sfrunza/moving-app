import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isVerifying } = rest;

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) => {
        return isVerifying ? (
          <div className="routes" />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return state.auth;
};

export default connect(mapStateToProps)(PrivateRoute);
