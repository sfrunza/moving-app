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
  Button,
} from '@material-ui/core';
import Gallery from 'react-grid-gallery';
import withWidth from '@material-ui/core/withWidth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DeleteIcon from '@material-ui/icons/Delete';
import ResponsiveGallery from 'react-responsive-gallery';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(5, 0),
    // // maxWidth: '900px',
    // margin: 'auto'
  },
  imageStyle: {
    // padding: '2px',
    // transition: 'transform .2s',
    // [theme.breakpoints.down('sm')]: {
    //   padding: '2px'
    // },

  }

}));

function GridGallery({ className, images, handleDeleteImage, ...rest }) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0)
  let arr = []
  images.map((image) => {
    arr.push({ "src" : image.photo.url,'thumbnailWidth': 3, 'thumbnailHeight': 2, 'thumbnail': image.photo.url, "id": image.id })
  })

  const handleScreen = () => {
    let number = false
    if (rest.width === 'sm' || rest.width === 'xs'){
      number = false
    } else number = true
    return number
  };

  const onCurrentImageChange = (id) => {
        setCurrentImage(id);
    }

  const numOfImagesPerRow = {
    xs: 5,
    s: 5,
    m: 8,
    l: 8,
    xl: 10,
    xxl: 10,
  };
  const imageMaxWidth = {xs: 20,s: 20,m: 20,l: 20,xl: 20,xxl:20}
  const screenWidthSizes = {xs: 120,s: 300,m: 368,l: 492,xl: 600}

  let id = arr.length != 0 ? arr[arr.length - 1].id : 0
  arr.map(image => {
    if(currentImage == arr.indexOf(image)){
      id = image.id
    }
  })
  console.log(id);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box mt={2}>
        <Gallery
          images={arr}
          enableLightbox
          enableImageSelection={false}
          rowHeight={50}
          currentImageWillChange={onCurrentImageChange}
          customControls={[
              <Button
                key="deleteImage"
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteImage(id)}
              >
                Delete
              </Button>
          ]}
        />
      </Box>
    </div>
  );
}

GridGallery.propTypes = {
  className: PropTypes.string
};

export default withWidth()(GridGallery);;
