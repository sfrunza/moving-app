import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const Loading = ({ className, ...rest }) => {
  const list = () => {
    return (
      <List className={className} {...rest}>
        <ListItem>
          <Skeleton variant="rect" width={350} height={350} />
        </ListItem>
        <ListItem>
          <Skeleton variant="rect" width={250} height={20} />
        </ListItem>
        <ListItem>
          <Skeleton variant="rect" width={200} />
        </ListItem>
        <ListItem>
          <Skeleton variant="rect" width={200} />
        </ListItem>
      </List>
    );
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        {list()}
      </Grid>
      <Grid item xs>
        {list()}
      </Grid>
      <Grid item xs>
        {list()}
      </Grid>
      <Grid item xs>
        {list()}
      </Grid>
      <Grid item xs>
        {list()}
      </Grid>
      <Grid item xs>
        {list()}
      </Grid>
    </Grid>
  );
};

Loading.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Loading;
