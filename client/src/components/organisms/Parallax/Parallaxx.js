import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { jarallax } from 'jarallax';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader, TypedText } from 'src/components/molecules';
import { CardBase } from 'src/components/organisms';
import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
  bgImage: {
    marginTop: 0,
    width: '100% !important',
    minWidth: '1000px !important',
    minHeight: '80vh !important',
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
      strength={100}
      bgClassName={classes.bgImage}
    >
      <div className={classes.fullHeight}>
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
