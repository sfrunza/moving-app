import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import Gallery from './Gallery'
import Header from './Header'
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden'
  }
}));

function HomeView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [images, setImages] = useState(null);

  const getJobs = useCallback(() => {
    axios
      .get('/api/v1/images.json')
      .then((response) => {
        if (isMountedRef.current) {
          setImages(response.data);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  if (!images) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Our Work"
    >
      <Header />
      <Gallery images={images}/>

    </Page>
  );
}

export default HomeView;
