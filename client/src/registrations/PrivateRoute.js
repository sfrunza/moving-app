import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const status = rest ? rest.loggedInStatus : null
  return (

      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route {...rest} render={props => {
        return(
          status ?
              <Component {...props} />
          : <Redirect to="/users/sign_in" />
      )
    }} />
  );
};

export default PrivateRoute;