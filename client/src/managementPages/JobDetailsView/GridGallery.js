import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@material-ui/core";
import Gallery from "react-grid-gallery";
import Trash from "src/icons/Trash";
import { deleteImage } from "src/slices/calendar";

function GridGallery({ images, dispatch }) {
  const [currentImage, setCurrentImage] = useState(0);
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
    <Box mt={1}>
      <Gallery
        images={arr}
        enableLightbox
        enableImageSelection={false}
        rowHeight={40}
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
        customControls={[
          <Button
            key="deleteImage"
            color="secondary"
            size="small"
            startIcon={<Trash />}
            onClick={() => dispatch(deleteImage(id))}
            disableElevation
          >
            Delete
          </Button>,
        ]}
      />
    </Box>
  );
}

GridGallery.propTypes = {
  className: PropTypes.string,
};

export default GridGallery;
