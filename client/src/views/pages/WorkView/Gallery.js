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
    marginTop: 96,
  },
  imageStyle: {
    borderRadius: theme.spacing(1),
    transition: 'transform .2s'
  }
}))

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
    xs: 1,
    s: 2,
    m: 2,
    l: 3,
    xl: 3,
    xxl: 3,
  };
  const imagesPaddingBottom = {
    xs: 16,
    s: 16,
    m: 16,
    l: 16,
    xl: 28,
    xxl:28
  }
  const colsPadding = {
    xs: 12,
    s: 12,
    m: 12,
    l: 12,
    xl: 14,
    xxl:14
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box>
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
