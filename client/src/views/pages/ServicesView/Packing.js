import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { LearnMoreLink } from 'src/components/atoms';

import { Grid } from '@material-ui/core';
import { SectionHeader, OverlapedImages } from 'src/components/molecules';

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
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <SectionHeader
            title={
              <span>
                <span className="text-highlighted">Full Packing </span>
                  Service
              </span>
            }
            subtitle={paragraph}
            className={classes.subtitle}
            align="left"
            subtitleColor="textSecondary"
            subtitleVariant='body1'
            data-aos="fade-up"
            disableGutter
            ctaGroup={[<LearnMoreLink title="View Packing Rates" variant="h6" to="/pricing" />]}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
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
