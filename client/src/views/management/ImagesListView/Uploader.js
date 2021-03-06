import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Box,
  Card,
  CardContent,
  FormHelperText,
  Grid,
  makeStyles
} from '@material-ui/core';
import FilesDropzone from 'src/components/FilesDropzone';


const useStyles = makeStyles(() => ({
  root: {

  },
  card: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }
}));

function Uploader({ className, setImages, images, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Formik
      initialValues={{
        photo: null,
        image: ''
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
          formData.append('photo', values.photo);
          fetch('/api/v1/images', {
            method: 'POST',
            body: formData
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            setImages(images.concat(data).sort(function(a, b) {
                return b.id - a.id;
              }))
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
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              sm={3}
            >
              <Box mt={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <FilesDropzone setFieldValue={setFieldValue}  handleSubmit={handleSubmit} text="Add Image"/>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
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
