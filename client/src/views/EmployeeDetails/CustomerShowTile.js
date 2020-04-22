import React from 'react';
import { Link } from 'react-router-dom';

const CityShowTile = props => {

    return(
      <div className='customer-head' style={{display: 'flex', flexDirection: "column", justifyContent: "space-around" ,flexWrap: "wrap", alignContent: "center"}}>
        <div>
          <h1>{props.first_name} {props.last_name}</h1>
        </div>
        <div>
          <p id="show-email">{props.role}</p>
        </div>
        <div>
        </div>
      </div>
    )
}

// <img className="show-banner" src={props.banner.url} />
export default CityShowTile;
