import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Upload from "src/icons/Upload";
import imageCompression from "browser-image-compression";
import { addImage } from "src/slices/calendar";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  input: {
    display: "none",
  },
}));

const convert = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export default function Uploader({ jobId, dispatch }) {
  const classes = useStyles();
  const [image, setImage] = useState([]);

  async function handleChnage(e) {
    const imageFile = e.target.files[0];

    const options = {
      maxSizeMB: 0.4,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      Object.assign(compressedFile, { path: imageFile.path });
      setImage(compressedFile);
    } catch (error) {
      console.log(error);
    }
  }

  const uploadFile = async () => {
    await dispatch(addImage(jobId, image));
    setImage([]);
  };

  const handleRemove = () => {
    setImage([]);
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleChnage}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="outlined"
          color="primary"
          component="span"
          disableElevation
          fullWidth
          startIcon={<Upload />}
        >
          Add photo to inventory
        </Button>
      </label>
      {image.name && (
        <div>
          <List className={classes.list}>
            <ListItem disableGutters>
              <ListItemIcon>
                <FileCopyIcon />
              </ListItemIcon>
              <ListItemText
                primary={image.name}
                secondary={convert(image.size)}
              />
            </ListItem>
            <ListItem disableGutters>
              <div className={classes.actions}>
                <Button size="small" onClick={handleRemove}>
                  Remove
                </Button>
                <Button
                  color="secondary"
                  size="small"
                  variant="contained"
                  disableElevation
                  onClick={uploadFile}
                >
                  Upload
                </Button>
              </div>
            </ListItem>
          </List>
        </div>
      )}
    </div>
  );
}
