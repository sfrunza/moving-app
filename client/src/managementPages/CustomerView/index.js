import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles,
} from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import Details from "./Details";
import Jobs from "./Jobs";
import { useSelector, useDispatch } from "src/store";
import { cleanCustomer, getCustomer } from "src/slices/customers";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.level2,
    // minHeight: "100%",
    // paddingTop: theme.spacing(3),
    // paddingBottom: theme.spacing(3),
  },
}));

function CustomerView({ match }) {
  const classes = useStyles();
  const { customer, customerJobs } = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("details");
  const customerId = match.params.id;
  const tabs = [
    { value: "details", label: "Details" },
    { value: "jobs", label: `Jobs (${customerJobs?.length})` },
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    dispatch(getCustomer(customerId));
    // dispatch(getCustomerJobs(customerId));

    return () => {
      dispatch(cleanCustomer());
    };
  }, [dispatch, customerId]);

  if (!customer) {
    return null;
  }

  return (
    <Page className={classes.root} title="Customer Details">
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          paddingY: 8,
        }}
      >
        <Container maxWidth={false}>
          <Header customer={customer} />
          <Box mt={3}>
            <Tabs
              onChange={handleTabsChange}
              scrollButtons="auto"
              value={currentTab}
              variant="scrollable"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box mt={3}>
            {currentTab === "details" && <Details customer={customer} />}
            {currentTab === "jobs" && <Jobs jobs={customerJobs} />}
          </Box>
        </Container>
      </Box>
    </Page>
  );
}

export default CustomerView;
