import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  colors,
} from '@material-ui/core';
import { Image } from 'src/components/atoms';
import { SectionHeader, IconAlternate } from 'src/components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    borderRadius: 8,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Local = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <SectionHeader
            title={
              <span>

                <span className="text-highlighted">Local{' '}</span>
                  Moving
                <br />
              </span>
            }
            subtitle="Hourly based full moving services in metro Boston and 150 miles around it."
            align="left"
            disableGutter
            subtitleProps={{
              variant: 'body1',
              color: 'textSecondary',
            }}
          />
          <List disablePadding>
            {data.map((item, index) => (
              <ListItem disableGutters key={index} data-aos="fade-up">
                <ListItemAvatar className={classes.listItemAvatar}>
                  <IconAlternate
                    size="medium"
                    fontIconClass={item.icon}
                    color={colors.indigo}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                  primaryTypographyProps={{
                    variant: 'h5',
                  }}
                  secondaryTypographyProps={{
                    variant: 'body2',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src="https://www.thespruce.com/thmb/1wdHAfdPPVg6buHlsckrOii4vYs=/2121x1414/filters:fill(auto,1)/moving_truck2-144669715-591095415f9b586470f54f37.jpg"
            alt="..."
            className={classes.coverImage}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Local.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Local;
