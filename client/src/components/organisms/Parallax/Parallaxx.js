import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { jarallax } from 'jarallax';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader, TypedText } from 'src/components/molecules';
import { CardBase } from 'src/components/organisms';
import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  bgImage: {
    // height: '75vh !important',
    width: '100% !important',
    // top: '20% !important',
    minWidth: '1000px !important',
    minHeight: '80vh !important',
  },
  headerSection: {
    backgroundImage: 'linear-gradient(#000000c9, #0000007d)',
  },
  fullHeight: {
    width: '100%',
    height: 'fit-content',
    minHeight: '80vh',
    padding: '1rem 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    color: 'white',
  },
  typed: {
    fontWeight: 'bold',
    color: 'orange'
  },

}));


const Parallaxx = props => {
  const { backgroundImage, title, subtitle, className, typedText, buttons, ...rest } = props;

  const classes = useStyles();

  return (
    <Parallax
          bgImage={backgroundImage}
          bgImageAlt="bg"
          strength={200}
          bgClassName={classes.bgImage}
      >
      <div className={clsx(classes.fullHeight, classes.headerSection)}>
      <SectionHeader
        title={
          <>
            <span className={classes.textWhite}>
              {title}
            </span>
            <br />
            <TypedText
              component="span"
              variant="h2"
              className={classes.typed}
              typedProps={{
                strings: typedText,
                typeSpeed: 100,
                loop: true,
              }}
            />
          </>
        }
        subtitle={
          <span className={classes.textWhite}>
            {subtitle}
          </span>
        }
        align="center"
        titleProps={{
          variant: 'h1',
        }}
        subtitleProps={{
          variant: 'h4',
        }}
        ctaGroup={buttons}

        data-aos="fade-up"
        disableGutter
      />
      </div>
    </Parallax>
  );
};

Parallaxx.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,

  backgroundImage: PropTypes.string.isRequired,

  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  typedText: PropTypes.array,
  buttons: PropTypes.array,
};

export default Parallaxx;
