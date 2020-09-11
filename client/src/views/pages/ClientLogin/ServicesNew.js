import React, { useState, useCallback, useRef, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
  Link
} from '@material-ui/core';
import clsx from 'clsx';

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
    borderRadius: '16px',
    padding: '2px',
    width: '40%',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  }

}));

function ServicesNew({images, className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photo, setPhoto] = useState([])
  const [gg, setGg] = useState({autoSize: true})

  const textInput = useRef()

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    setGg(textInput.current);
  };

  const newImages = []
  images.map(image => {
      newImages.push({ "src" : image.photo.url, 'caption': image.image, 'width': 4,
    'height': 4})
    })
    console.log(gg);
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
        <Gallery photos={newImages} onClick={openLightbox} className={classes.imageStyle} direction={"row"}/>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                styles={classes.imageStyle}
                views={newImages.map(x => ({
                  ...x,
                  srcset: x.src,
                  ref: x.ref,
                  sizes: x.sizes
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        </Box>
      </Container>
    </div>
  );
}

export default ServicesNew
