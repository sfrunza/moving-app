import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import axios from "axios";
import LoadingTable from "src/components/LoadingTable";

const Cards = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [users, setUsers] = useState();

  async function getUsers() {
    let data = await axios.get("/api/v1/users", { withCredentials: true });
    let res = data.data;

    setUsers(res.users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (!users) return <LoadingTable />;

  return (
    <Grid container spacing={isMd ? 6 : 2} justifyContent="center">
      {users.map((user, i) => {
        return (
          <Grid item xs={12} md={4} sm={6} key={i}>
            <Card user={user} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cards;
