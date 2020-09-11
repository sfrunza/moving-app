import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import ServicesNew from './ServicesNew'
import Header from './Header'
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden'
  }
}));

function ClientLogin() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [images, setImages] = useState(null);

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
      title="Our Work"
    >
      <Header />
      <ServicesNew images={images}/>

    </Page>
  );
}

export default ClientLogin;
