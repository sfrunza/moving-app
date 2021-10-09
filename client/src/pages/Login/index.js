import React from "react";
import Page from "src/components/Page";
import LoginForm from "./LoginForm";
import { makeStyles } from "@material-ui/core/styles";
import Image from "src/components/Image";
import HeroShaped from "src/components/HeroShaped";
import book from "src/assets/img/book.svg";
import Footer from "src/layouts/MainLayout/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .hero-shaped": {
      borderBottom: 0,
    },
    "& .hero-shaped__wrapper": {
      minHeight: "100vh",
      // [theme.breakpoints.up("md")]: {
      //   minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`,
      // },
    },
  },
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  image: {
    objectFit: "cover",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Page title="Login | Company Name" className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <LoginForm />
          </div>
        }
        rightSide={<Image src={book} className={classes.image} />}
      />
      <Footer />
    </Page>
  );
};

export default Login;
