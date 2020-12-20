import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  Box,
} from '@material-ui/core';
import { SectionHeader, DescriptionCta } from 'src/components/molecules';
import { Section, CardBase } from 'src/components/organisms';
import { posts } from './data'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(10),
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: 'white',
  },
  cardHighlighted: {
    background: theme.palette.secondary.main,
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
    width: 30,
    height: 30,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  subHeader: {
    marginTop: '5px',
  },
  link: {
    '&:hover' :{
      textDecoration: 'none'
    }
  },
  address: {
    width: '180px',
  },
  infoEmail: {
    marginTop: '15px',

  },
}));

const PrivacyPolicy = () => {
  const classes = useStyles();
  const email = 'info@insightmoving.com'

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <DescriptionCta
          title="Privacy Policy"
          subtitle="Updated on 09.15.2020"
          align={'left'}
          titleProps={{
            className: classes.fontWeightBold,
            color: 'textPrimary',
          }}
          subtitleProps={{
            color: 'textSecondary',
          }}
        />
        <Divider className={classes.divider} />
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
          {posts.map(info => {
            return (
              <SectionHeader
                key={info.id}
                title={info.id+`. `+info.title}
                subtitle={info.content}
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                  variant: 'h5'
                }}
                subtitleProps={{
                  variant: 'body2',
                  color: 'textPrimary',
                }}
              />
            )
          })}
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={isMd ? 4 : 2} direction="column">
              <Grid item xs={12}>
                <CardBase withShadow className={classes.cardHighlighted}>
                  <SectionHeader
                    title="Have a question?"
                    subtitle="Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime!"
                    ctaGroup={[
                      <Button
                        variant="contained"
                        className={classes.button}
                        size={isMd ? 'large' : 'medium'}
                        href={"mailto:" + email}
                      >
                        Contact us
                      </Button>
                    ]}
                    disableGutter
                    align="left"
                    titleProps={{
                      variant: 'subtitle1',
                      className: clsx(
                        classes.textWhite,
                        classes.fontWeightBold,
                      ),
                    }}
                    subtitleProps={{
                      variant: 'body2',
                      className: classes.textWhite,
                    }}
                  />
                </CardBase>
              </Grid>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Typography
              variant="h2"
              color="textPrimary"
              className={classes.header}
            >
              Contact
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              className={classes.subHeader}
            >
              Please contact our office with any questions or concerns regarding our policy.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              className={clsx(classes.subHeader, classes.address)}
            >
              Insight Moving LLC. 1111 LOL Street Boston, MA 02001
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              className={classes.infoEmail}
            >
              <a href={"mailto:" + email}>info@insightmoving.com</a>
            </Typography>
          </Box>
        </Grid>
      </Section>
      <Divider />

    </div>
  );
};

export default PrivacyPolicy;
