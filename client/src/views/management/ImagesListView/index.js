import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';
import Uploader from './Uploader'
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

function ImagesListVew() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [images, setImages] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = (id) => {
    fetch(`/api/v1/images/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        const newList = images.filter((item) => item.id !== id);
        setImages(newList)
        enqueueSnackbar('Image Deleted', {
          variant: 'error'
        });
      })
  }

  const getImages = useCallback(() => {
    axios
      .get('/api/v1/images.json')
      .then((response) => {
        if (isMountedRef.current) {
          setImages(response.data);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  if (!images) {
    return null;
  }
  
  return (
    <Page
      className={classes.root}
      title="Image List"
    >
      <Container maxWidth={false}>
        <Header />
        <Uploader setImages={setImages} images={images}/>
        <Box mt={5}>
          <Results images={images} handleDelete={handleDelete} />
        </Box>
      </Container>
    </Page>
  );
}

export default ImagesListVew;
