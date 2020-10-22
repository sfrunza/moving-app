/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  Checkbox,
  InputAdornment,
  IconButton,
  Link,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  makeStyles,
  CardMedia,
  colors
} from '@material-ui/core';
import {
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from 'react-feather';
import Label from 'src/components/Label';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
  },
  bulkOperations: {
    position: 'relative'
  },
  image: {
    height: 68,
    width: 68
  },
  media: {
    width: '10em',
    backgroundSize: '100%',
  },
  openDeleteButton: {
    color: colors.red[600],
    border: `1px solid ${colors.red[500]}`,
    '&:hover': {
      backgroundColor: colors.red[50],
    }
  },
  deleteAction: {
    color: colors.red[600],
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  idCell: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  }
}));

function Results({ className, images, handleDelete, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.idCell}>
                  Image ID
                </TableCell>
                <TableCell>
                  Image
                </TableCell>
                <TableCell align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {images.map((image, index) => {
                if (image.job_id === null) {
                  return (
                    <TableRow
                      hover
                      key={index}
                    >
                      <TableCell className={classes.idCell}>
                        {image.id}
                      </TableCell>
                      <TableCell>
                        <img
                          className={classes.media}
                          src={image.photo.url}
                          alt={image.image}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => handleDelete(image.id)}>
                          <SvgIcon fontSize="large">
                            <DeleteIcon fontSize="large" className={classes.deleteAction}/>
                          </SvgIcon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  images: PropTypes.array,
};

Results.defaultProps = {
  jobs: []
};

export default Results;
