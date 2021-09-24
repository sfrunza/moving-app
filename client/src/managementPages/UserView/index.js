import React, { useState } from "react";
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
import General from "./General";
import Security from "./Security";
import { useSelector } from "src/store";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.level2,
    minHeight: "100%",
  },
}));

function UserView() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState("general");
  const { user } = useSelector((state) => state.auth);
  const tabs = [
    { value: "general", label: "General" },
    { value: "security", label: "Security" },
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  const handlePasswordChange = (user, id) => {
    fetch(`/api/v1/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ user: user }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <Page className={classes.root} title="Settings">
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          paddingY: 8,
        }}
      >
        <Container maxWidth={false}>
          <Header user={user} />
          <Box mt={3}>
            <Tabs
              onChange={handleTabsChange}
              scrollButtons="auto"
              value={currentTab}
              variant="scrollable"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab, i) => (
                <Tab key={i} label={tab.label} value={tab.value} wrapped />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box mt={3}>
            {currentTab === "general" && <General />}
            {currentTab === "security" && (
              <Security
                user={user}
                handlePasswordChange={handlePasswordChange}
              />
            )}
          </Box>
        </Container>
      </Box>
    </Page>
  );
}

export default UserView;
