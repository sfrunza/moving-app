/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import imageCompression from 'browser-image-compression';
import {
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  makeStyles,
  colors,
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreIcon from '@material-ui/icons/MoreVert';
import bytesToSize from 'src/utils/bytesToSize';
import { Camera as CameraIcon }  from 'react-feather';


const useStyles = makeStyles((theme) => ({
  root: {},
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  dragActive: {
    backgroundColor: theme.palette.action.active,
    opacity: 0.5
  },
  image: {
    width: 130
  },
  info: {
    marginTop: theme.spacing(1)
  },
  list: {
    maxHeight: 320
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  button: {
    width: '100%',
    borderColor: colors.deepPurple['A200'],
    '&:hover': {
      borderColor: colors.deepPurple['A200']
    }
  },
  buttonBox: {
    width: '100%',
    color: colors.deepPurple['A200']
  }
}));

function FilesDropzone({ className, setFieldValue, handleSubmit, text, ...rest }) {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const handleDrop = useCallback((acceptedFiles) => {
    handleImageUpload(acceptedFiles)

  }, []);

  async function handleImageUpload(acceptedFiles) {

    const imageFile = acceptedFiles[0]

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      Object.assign(compressedFile, {path: imageFile.path});
      setFiles(compressedFile);
      setFieldValue("photo", compressedFile)
      setFieldValue("image", compressedFile.name)

      await console.log("await"); // write your own logic
    } catch (error) {
      console.log(error);
    }

  }


  const handleRemoveAll = () => {
    setFiles([]);
  };
  const handleFunction = () => {
    handleSubmit();
    handleRemoveAll();
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Box
          display="flex"
          alignItems='center'
          className={classes.buttonBox}
        >

          <Box>
            <CameraIcon />
          </Box>

          <Box flexGrow={1}>
            {text}
          </Box>
        </Box>

      </Button>
      {files.name != undefined && (
        <>
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <List className={classes.list}>
                <ListItem
                >
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={files.name}
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary={bytesToSize(files.size)}
                  />

                </ListItem>
              <ListItem>
                <div className={classes.actions}>
                  <Button
                    onClick={handleRemoveAll}
                    size="small"
                  >
                    Remove
                  </Button>
                  <Button
                    color="secondary"
                    size="small"
                    variant="contained"
                    onClick={handleFunction}
                  >
                    Upload
                  </Button>
                </div>
              </ListItem>
            </List>
          </PerfectScrollbar>
        </>
      )}
    </div>
  );
}

FilesDropzone.propTypes = {
  className: PropTypes.string
};

export default FilesDropzone;
