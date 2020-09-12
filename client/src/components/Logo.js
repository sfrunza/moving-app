import React from 'react';
import logo from 'src/assets/img/looool.png'

function Logo(props) {
  return (
    <img
      alt="Logo"
      src={logo}
      {...props}
      style={{height: '40px', borderRadius: '3px', backgroundColor: '#fff'}}
    />
  );
}

export default Logo;
