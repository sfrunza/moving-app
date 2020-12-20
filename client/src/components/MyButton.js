import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  myButton: {
    // borderRadius: theme.spacing(3)
    // padding: theme.spacing(1, 2)
  }
}));

const MyButton = props => {
  const classes = useStyles();
  const { text, variant, color, to, size, startIcon, onClick, className, ...rest } = props;

  const CustomRouterLink = forwardRef((props, ref) => (
    <div ref={ref}>
      <RouterLink {...props} />
    </div>
  ));

  return (
      <Button
        size={size}
        variant={variant}
        color={color}
        component={CustomRouterLink}
        to={to}
        className={clsx(classes.myButton, className)}
        startIcon={startIcon}
        onClick={onClick}
      >
        {text}
      </Button>
  );
}

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['default','inherit','primary','secondary']),
  to: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),

};

export default MyButton;
