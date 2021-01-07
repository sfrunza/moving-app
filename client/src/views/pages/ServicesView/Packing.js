import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { LearnMoreLink, Image } from 'src/components/atoms';

import { Grid, Box, Divider, Typography } from '@material-ui/core';
import { SectionHeader, OverlapedImages } from 'src/components/molecules';
import closet from 'src/assets/img/closet.png'
import kitchen from 'src/assets/img/kitchen.jpg'

const useStyles = makeStyles(() => ({
  root: {},
  subtitle: {
    whiteSpace: 'pre-line',
  }
}));

const Packing = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const paragraph = 'We will send experienced, professional packers to your place and will deliver all necessary equipment such as boxes, packing paper, bubble wrap, stretch and shrink wrap, rolls of tape, blankets, and home protection. \n Packers will apply their techniques and skills to make sure your belongings are delivered safe and secured to any desired destination, whether it is a local move within Boston area or a long-distance journey.'
  const result = paragraph.match( /[^\.!\?]+[\.!\?]+/g );
  const newParagaraph = () => {
    return (
      <div>
        {result[0]}
        <br/>
        {result[1]}
      </div>
    )
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title='Full packing service'
        subtitle="Our specially trained team of Boston movers packs and unpacks your items safely and efficiently."
        subtitleProps={{
          variant: 'body1',
          color: 'textSecondary',
        }}
      />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <SectionHeader
            title="Packing services for all types of move"
            subtitle={paragraph}
            className={classes.subtitle}
            align="left"
            titleProps={{
              variant: 'h4',
            }}
            subtitleProps={{
              variant: 'body1',
              color: 'textSecondary',
            }}

            disableGutter

          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <OverlapedImages
            image1={{
              src: 'https://images.squarespace-cdn.com/content/v1/53d53c64e4b076e5e3fd36fe/1551465376845-7TX2WK9XTGEQKRGSKOGQ/ke17ZwdGBToddI8pDm48kLom9s8koPIHgeVkFZNIuNJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYuPIFc-E8EMo_ghoy1DYbz-Ii5XrIc4QIUxEU-9O7yI0DTGPZFgMLOf_9pIliC1pQ/packing-stemware-how-to-pack-dishes.jpg',
              srcSet: 'https://images.squarespace-cdn.com/content/v1/53d53c64e4b076e5e3fd36fe/1551465376845-7TX2WK9XTGEQKRGSKOGQ/ke17ZwdGBToddI8pDm48kLom9s8koPIHgeVkFZNIuNJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYuPIFc-E8EMo_ghoy1DYbz-Ii5XrIc4QIUxEU-9O7yI0DTGPZFgMLOf_9pIliC1pQ/packing-stemware-how-to-pack-dishes.jpg',
              alt: '...',
            }}
            image2={{
              src: 'https://moving.tips/wp-content/uploads/2019/07/packing-furniture.jpg',
              srcSet: 'https://moving.tips/wp-content/uploads/2019/07/packing-furniture.jpg',
              alt: '...',
            }}
            image3={{
              src: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-pack-a-tv-for-moving-step-1.jpg',
              srcSet: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-pack-a-tv-for-moving-step-1.jpg',
              alt: '...',
            }}
          />
        </Grid>
      </Grid>
      <Box className={classes.divider} mt={6} mb={6}>
        <Divider />
      </Box>
      <Box display='flex'>
        <Image
          src={kitchen}
        />
        <Image
          src={closet}
        />
      </Box>
      <Box className={classes.divider} mt={6} mb={6}>
        <Divider />
      </Box>
      <SectionHeader
        title='Paking specialty items'
        subtitle="If you are on a budget or you want to lower the cost of your move, we offer packing of specialty items, particularly fragile only: kitchen, artwork, mirrors or other breakables or valuables. You can also inquire about our crating services for extra valuable items."
        subtitleProps={{
          variant: 'body1',
          color: 'textSecondary',
        }}
        titleProps={{
          variant: 'h4',
        }}
        ctaGroup={[
          <Box align='center'>
            <Typography variant='h5'>
              Our packing rates are the same as our hourly rates for moving.
            </Typography>
            <LearnMoreLink title="View Rates" to="/pricing" />
          </Box>
          ]}
      />
    </div>
  );
};

Packing.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Packing;
