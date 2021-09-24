import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, makeStyles, Button } from "@material-ui/core";
import Gallery from "react-grid-gallery";
// import withWidth from "@material-ui/core/withWidth";
// import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DeleteIcon from "@material-ui/icons/Delete";
import { useStateValue } from "src/StateProvider";
// import ResponsiveGallery from "react-responsive-gallery";

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
  },
  deleteButton: {
    // padding: theme.spacing(1),
  },
}));

function GridGallery({
  className,
  images,
  handleDeleteImage,
  jobStatus,
  ...rest
}) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [{ user }] = useStateValue();
  let arr = [];
  images.map((image) => {
    arr.push({
      src: image.photo.url,
      thumbnailWidth: 3,
      thumbnailHeight: 4,
      thumbnail: image.photo.url,
      id: image.id,
      nano: "https://www.urbansplash.co.uk/images/placeholder-1-1.jpg",
    });
    return null;
  });

  const onCurrentImageChange = (id) => {
    setCurrentImage(id);
  };

  let id = arr.length !== 0 ? arr[arr.length - 1].id : 0;
  arr.map((image) => {
    if (currentImage === arr.indexOf(image)) {
      id = image.id;
    }
    return null;
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={2}>
        <Gallery
          images={arr}
          enableLightbox
          enableImageSelection={false}
          rowHeight={50}
          currentImageWillChange={onCurrentImageChange}
          backdropClosesModal={true}
          thumbnailStyle={() => {
            return {
              cursor: "pointer",
              width: "100%",
              height: "100%",
              marginTop: 0,
              objectFit: "cover",
              objectPosition: "center",
              "&:hover": {
                opacity: 0.5,
              },
            };
          }}
          customControls={
            jobStatus === "Completed" && !user.admin
              ? null
              : [
                  <Button
                    key="deleteImage"
                    color="secondary"
                    size="small"
                    className={classes.deleteButton}
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteImage(id)}
                    disableElevation
                  >
                    Delete
                  </Button>,
                ]
          }
        />
      </Box>
    </div>
  );
}

GridGallery.propTypes = {
  className: PropTypes.string,
};

export default GridGallery;
