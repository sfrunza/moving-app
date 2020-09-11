import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  makeStyles,
} from '@material-ui/core';
import ResponsiveGallery from 'react-responsive-gallery';
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
    // maxWidth: '900px',
    margin: 'auto'
  },
  imageStyle: {
    borderRadius: '16px',
    padding: '8px',
    transition: 'transform .2s',
    [theme.breakpoints.down('sm')]: {
      padding: '2px'
    },

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

  const newImages = []
  images.map(image => {
      newImages.push({ "src" : image.photo.url })
      return null
    })

    const numOfImagesPerRow = {
      xs: 1,
      s: 2,
      m: 2,
      l: 3,
      xl: 3,
      xxl: 3,
    };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box mt={2}>
        <ResponsiveGallery images={newImages} useLightBox={handleScreen()} numOfImagesPerRow={numOfImagesPerRow} imagesStyle={classes.imageStyle}
        />
      </Box>
    </div>
  );
}

Gallery.propTypes = {
  className: PropTypes.string
};

export default withWidth()(Gallery);;
