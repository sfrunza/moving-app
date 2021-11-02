import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, makeStyles } from "@material-ui/core";
import Gallery from "react-grid-gallery";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Galleryy({ className, images, ...rest }) {
  const classes = useStyles();

  let arr = [];
  images.map((image) => {
    arr.push({
      src: image.photo.url,
      thumbnailWidth: 2,
      thumbnailHeight: 2,
      thumbnail: image.photo.url,
      id: image.id,
    });
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
        />
      </Box>
    </div>
  );
}

Galleryy.propTypes = {
  className: PropTypes.string,
};

export default withWidth()(Galleryy);
