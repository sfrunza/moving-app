import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#f5f7ff',
    borderRadius: theme.spacing(1),
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
  inner: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(10, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(15, 2),
    },
  },
  innerNarrowed: {
    maxWidth: 800,
  },
}));

/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */
const SectionAlternate = props => {
  const { children, innerNarrowed, className, ...rest } = props;

  const classes = useStyles();

  return (
    <section
      className={clsx('section-alternate', classes.root, className)}
      {...rest}
    >
      <div
        className={clsx(
          'section-alternate__content',
          classes.inner,
          innerNarrowed ? classes.innerNarrowed : {},
        )}
      >
        {children}
      </div>
    </section>
  );
};

SectionAlternate.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  innerNarrowed: PropTypes.bool,
};

export default SectionAlternate;
