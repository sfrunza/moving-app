import React, {useState, useCallback, useEffect} from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import QuillEditor from 'src/components/QuillEditor';
import FilesDropzone from 'src/components/FilesDropzone';

const useStyles = makeStyles(() => ({
  root: {

  },
  card: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  buttonCamera: {
    width: '100%',
  }
}));

function Uploader({ className, jobId, setImages, images, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const getJobId = () => {
    return jobId
  }

  useEffect(() => {
    getJobId()
  }, [jobId]);

  return (
    <Formik
      initialValues={{
        photo: null,
        image: '',
        job_id: jobId
      }}
      validationSchema={Yup.object().shape({
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting,
        resetForm
      }) => {
        try {
          const formData = new FormData();
          formData.append('image', values.image);
          formData.append('job_id', values.job_id);
          formData.append('photo', values.photo);

          fetch('/api/v1/images.json', {
            method: 'POST',
            body: formData
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            setImages(images.concat(data))
          })
          .catch(error=>console.log(error));

          resetForm({})

          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Image Added', {
            variant: 'success'
          });
        } catch (err) {
          setErrors({ submit: err.message });
          setStatus({ success: false });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values,
      }) => {
        return(
        <form
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Grid
            className={classes.buttonCamera}
          >
            <Card className={classes.card}>
              <CardContent>
                <FilesDropzone setFieldValue={setFieldValue}  handleSubmit={handleSubmit} text="Add Photo to Inventory"/>
              </CardContent>
            </Card>
          </Grid>
          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>
                {errors.submit}
              </FormHelperText>
            </Box>
          )}
        </form>
      )}
    }
    </Formik>
  );
}

Uploader.propTypes = {
  className: PropTypes.string
};

export default Uploader;
