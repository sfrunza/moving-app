import React from 'react';

function Logo(props) {
  return (
    <img
      alt="Logo"
      src="/static/home/logo.jpg"
      {...props}
      style={{height: '30px', borderRadius: '3px'}}
    />
  );
}

export default Logo;
