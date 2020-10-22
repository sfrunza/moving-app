/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
  makeStyles
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
  },
  buttonBox: {
    width: '100%',
  }
}));

function FilesDropzone({ className, setFieldValue, handleSubmit, text, ...rest }) {
  const classes = useStyles();
  const [files, setFiles] = useState([]);



  const handleDrop = useCallback((acceptedFiles) => {

    setFiles(acceptedFiles);
    setFieldValue("photo", acceptedFiles)
    setFieldValue("image", acceptedFiles[0].name)

  }, []);


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
      {files.length > 0 && (
        <>
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <List className={classes.list}>
              {files.map((file, i) => (
                <ListItem
                  divider={i < files.length - 1}
                  key={i}
                >
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={file.name}
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary={bytesToSize(file.size)}
                  />

                </ListItem>
              ))}
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
