import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
  Link
} from '@material-ui/core';
import ResponsiveGallery from 'react-responsive-gallery';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 100,
    paddingBottom: 100,
  },
  galleryContainer: {
    // '& > div': {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-around',
    // },
  },
  imageStyle: {
    borderRadius: '8px',
    padding: '2px',
  }

}));

function GalleryPage({ className, images, ...rest }) {
  const classes = useStyles();

  const newImages = []
  images.map(image => {
      newImages.push({ "src" : image.photo.url, "lightboxCaption" : image.image, "lightboxTitle": image.image })
    })

    const imagesMaxWidth = {
      xs: 100,
      s: 100,
      m: 100,
      l: 100,
      xl: 100,
      xxl: 100,
    };
    const numOfImagesPerRow = {
      xs: 1,
      s: 2,
      m: 2,
      l: 3,
      xl: 4,
      xxl: 4,
    };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          style={{fontFamily: "Maison Neue Bold" }}
        >
          We make moving easy.
        </Typography>
        <Box mt={7}>
          {/*<Gallery images={newImages} enableImageSelection={false} showLightboxThumbnails={true} backdropClosesModal={true}/>*/}
          <ResponsiveGallery images={newImages} useLightBox numOfImagesPerRow={numOfImagesPerRow} imagesStyle={classes.imageStyle} colsPadding={20}
          lightboxCaption='s,jdfnkjasnkdjnakjls'
          />
        </Box>
      </Container>
    </div>
  );
}

GalleryPage.propTypes = {
  className: PropTypes.string
};

export default GalleryPage;
