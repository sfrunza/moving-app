import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, Divider, Box } from '@material-ui/core';
import { Image, LearnMoreLink } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import MyButton from 'src/components/MyButton';

const useStyles = makeStyles(theme => ({
  root: {},
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
  divider: {
    padding: theme.spacing(4, 0),
    width: '100%',
  }
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
      <SectionHeader
        title="Local moving"
        subtitle="Hourly based full moving services in metro Boston and 150 miles around it."
        subtitleProps={{
          variant: 'body1'
        }}
      />
      <Grid container justify="center">
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            spacing={isMd ? 4 : 2}
            alignItems="center"
            justify="space-between"
            direction={index % 2 === 1 ? 'row-reverse' : 'row'}
            className={classes.listGrid}
          >
            <Grid item xs={12} sm={6}>
              <SectionHeader
                titleProps={{
                  variant: 'h4',
                }}
                title={item.title}
                subtitle={item.description}
                subtitleProps={{
                  variant: 'body1',
                }}
                align="left"
                disableGutter
              />
            </Grid>
            <Grid item container justify="center" xs={12} sm={6}>
              <Image
                src={item.illustration}
                alt={item.label}
                className={classes.listGrid}
              />
            </Grid>
            <Box className={classes.divider}>
              <Divider />
            </Box>
          </Grid>
        ))}
        <Grid item container justify="center" xs={12}>
          <MyButton
            variant="outlined"
            size={isMd ? 'large' : 'medium'}
            color="secondary"
            to='/book'
            text="Book us now"
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
