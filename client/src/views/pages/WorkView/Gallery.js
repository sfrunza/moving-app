import React, {
  useCallback,
  useState,
  useRef,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  makeStyles,
} from '@material-ui/core';
import ResponsiveGallery from 'react-responsive-gallery';
import withWidth from '@material-ui/core/withWidth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: '900px',
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 2),
    },
  },
  imageStyle: {
    borderRadius: theme.spacing(1),
    // padding: '8px',
    transition: 'transform .2s',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);'
    // [theme.breakpoints.down('sm')]: {
    //   padding: '2px'
    // },

  },
  box: {
    '& div': {
      // padding: 0,
    }
  }

}));

function Gallery({ className, images, ...rest }) {
  const classes = useStyles();

  const handleScreen = () => {
    let number = false
    if (rest.width === 'sm' || rest.width === 'xs'){
      number = false
    } else number = true
    return number
  };

  const numOfImagesPerRow = {
    xs: 2,
    s: 2,
    m: 3,
    l: 3,
    xl: 3,
    xxl: 3,
  };
  const imagesPaddingBottom = {
    xs: 0.5,
    s: 1,
    m: 16,
    l: 16,
    xl: 24,
    xxl:24
  }
  const colsPadding = {
    xs: 2,
    s: 2,
    m: 8,
    l: 8,
    xl: 12,
    xxl:12
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box className={classes.box}>
        <ResponsiveGallery
          images={images}
          useLightBox
          numOfImagesPerRow={numOfImagesPerRow}
          colsPadding={colsPadding}
          imagesStyle={classes.imageStyle}
          imagesPaddingBottom	={imagesPaddingBottom}
        />
      </Box>
    </div>
  );
}

Gallery.propTypes = {
  className: PropTypes.string
};

export default withWidth()(Gallery);;
