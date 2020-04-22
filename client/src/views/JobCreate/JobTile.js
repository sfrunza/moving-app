import React from 'react';
import { Link } from 'react-router-dom';

const JobTile = props => {

    return(
      <div className="city-container">
        <Link to="#">
          <h2 className="namestate">{props.key}</h2>
          <li className="description">sdfkmsldmfsdf</li>
        </Link>
      </div>
    )

}

export default JobTile;
