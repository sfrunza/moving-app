import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default ElevationScroll;
