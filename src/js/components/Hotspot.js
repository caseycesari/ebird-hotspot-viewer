import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
    hotspotId: PropTypes.string,
    locName: PropTypes.string,
};

export default function Hotspot(props) {
    return (
      <li className="list-group-item">
        <Link to={`hotspot/${props.hotspotId}`}>
          {props.locName}
        </Link>
      </li>
    );
}

Hotspot.propTypes = propTypes;
