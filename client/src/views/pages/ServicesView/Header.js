import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withWidth from '@material-ui/core/withWidth';
import { useMediaQuery } from '@material-ui/core';
import { SectionHeader, TypedText } from 'src/components/molecules';
import { makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },
  typed: {
    fontWeight: 'bold',
    color: 'orange'
  },
  calculator: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
  drawer: {
    borderRadius: '16px 16px 0px 0px',
  },
  button: {
    borderRadius: '24px',
    border: '1px solid #673ab7',
    color: '#673ab7',
    padding: '10px 20px',
    backgroundColor: '#fff',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#673ab7',
      border: 'none',
    },
  },
  textWhite: {
    color: 'white',
  },
}));

function Header({ className, ...rest }) {

  const classes = useStyles();
  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <>
            <span className={classes.textWhite}>
              Moving Services
            </span>
            <br />
            <TypedText
              component="span"
              variant="h1"
              className={classes.typed}
              typedProps={{
                strings: [
                  'Responsible',
                  'Efficient',
                  'Reliable',
                ],
                typeSpeed: 100,
                loop: true,
              }}
            />
          </>
        }
        align="center"
        titleProps={{
          variant: 'h1',
        }}
        subtitleProps={{
          variant: 'h4',
        }}
        data-aos="fade-up"
        disableGutter
      />
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default withWidth()(Header);
