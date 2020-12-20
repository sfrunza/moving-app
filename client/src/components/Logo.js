import React from 'react';

function Logo(props) {
  return (
    <img
      alt="Logo"
      src={props.logo}
      {...props}
      style={{height: '40px'}}
    />
  );
}

export default Logo;
