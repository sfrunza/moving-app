import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import TopBarOnScroll from "./TopBarOnScroll";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    position: "relative",
    top: -65,
  },
  main: {
    flex: "1 0 auto",
  },
}));

function MainLayout({ children, history }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Our work",
      href: "/work",
    },
    {
      title: "+1 (000) 000-0000",
      href: "tel:0000000000",
    },
  ];

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div className={classes.root}>
      <TopBar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        history={history}
      />
      <TopBarOnScroll
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        history={history}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
        history={history}
      />
      <main className={classes.main}>{children}</main>
      {/* <Footer pages={pages} /> */}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
