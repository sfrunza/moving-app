import React from "react";
import Account from "./Account";
import { useDispatch } from "src/store";
import { logoutUser } from "src/slices/auth";

const Auth = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const path = history.location.pathname;

  const handleSignOut = () => {
    dispatch(logoutUser(history));
  };
  return <Account handleSignOut={handleSignOut} path={path} />;
};

export default Auth;
